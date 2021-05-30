import { LuckyGrid } from '../../node_modules/lucky-canvas/dist/lucky-canvas.cjs.min'
import { changeUnits, resolveImage, getImage } from '../utils'

Component({
  properties: {
    width: { type: String, value: '600rpx' },
    height: { type: String, value: '600rpx' },
    rows: { type: String, optionalTypes: [Number], value: '3' },
    cols: { type: String, optionalTypes: [Number], value: '3' },
    blocks: { type: Array, value: [] },
    prizes: { type: Array, value: [] },
    buttons: { type: Array, value: [] },
    defaultConfig: { type: Object, value: {} },
    defaultStyle: { type: Object, value: {} },
    activeStyle: { type: Object, value: {} },
    start: { type: Function, value: () => {} },
    end: { type: Function, value: () => {} },
  },
  data: {
    isShow: false,
  },
  observers: {
    'prizes.**': function(newData, oldData) {
      this.$lucky && (this.$lucky.prizes = newData)
    },
    'buttons.**': function(newData, oldData) {
      this.$lucky && (this.$lucky.buttons = newData)
    },
  },
  ready() {
    wx.createSelectorQuery().in(this).select('#lucky-grid').fields({
      node: true, size: true
    }).exec((res) => {
      if (!res[0] || !res[0].node) {
        console.error('lucky-canvas 获取不到 canvas 标签')
        return
      }
      const canvas = this.canvas = res[0].node
      const dpr = this.dpr = wx.getSystemInfoSync().pixelRatio
      const ctx = this.ctx = canvas.getContext('2d')
      const data = this.data
      canvas.width = res[0].width * dpr
      canvas.height = res[0].height * dpr
      ctx.scale(dpr, dpr)
      this.$lucky = new LuckyGrid({
        flag: 'MP-WX',
        ctx,
        dpr,
        width: res[0].width,
        height: res[0].height,
        // rAF: canvas.requestAnimationFrame, // 帧动画真机调试会报错!
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval,
        unitFunc: (num, unit) => changeUnits(num + unit),
      }, {
        rows: data.rows,
        cols: data.cols,
        blocks: data.blocks,
        prizes: data.prizes,
        buttons: data.buttons,
        defaultConfig: data.defaultConfig,
        defaultStyle: data.defaultStyle,
        activeStyle: data.activeStyle,
        start: (...rest) => {
          this.triggerEvent('start', ...rest)
        },
        end: (...rest) => {
          this.triggerEvent('end', ...rest)
        },
      })
      // 为了保证 onload 回调准确
      this.setData({ isShow: true })
    })
  },
  methods: {
    imgBindload (e) {
      const { name, index, i } = e.currentTarget.dataset
      const img = this.data[name][index].imgs[i]
      resolveImage(e, img, this.canvas)
    },
    imgBindloadActive (e) {
      const { name, index, i } = e.currentTarget.dataset
      const img = this.data[name][index].imgs[i]
      resolveImage(e, img, this.canvas, 'activeSrc', '$activeResolve')
    },
    toPlay(e) {
      const ctx = this.ctx
      const { x, y } = e.changedTouches[0]
      this.data.buttons.forEach(btn => {
        if (!btn) return
        ctx.beginPath()
        ctx.rect(...this.$lucky.getGeometricProperty([
          btn.x,
          btn.y,
          btn.col || 1,
          btn.row || 1
        ]))
        if (!ctx.isPointInPath(x * this.dpr, y * this.dpr)) {
          return
        }
        // 触发 lucky-canvas 的抽奖逻辑
        this.$lucky.startCallback()
      })
    },
    play(...rest) {
      this.$lucky.play(...rest)
    },
    stop(...rest) {
      this.$lucky.stop(...rest)
    },
    getImage () {
      return getImage.call(this)
    },
  },
})
