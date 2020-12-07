import { LuckyWheel } from 'lucky-canvas'

Component({
  properties: {
    width: {
      type: String,
      value: '600rpx'
    },
    height: {
      type: String,
      value: '600rpx'
    },
    blocks: {
      type: Array,
      value: []
    },
    prizes: {
      type: Array,
      value: []
    },
    buttons: {
      type: Array,
      value: []
    },
    defaultConfig: {
      type: Object,
      value: {}
    },
    defaultStyle: {
      type: Object,
      value: {}
    },
    start: {
      type: Function,
      value: () => {}
    },
    end: {
      type: Function,
      value: () => {}
    },
  },
  ready() {
    const query = wx.createSelectorQuery().in(this)
    query.select('#lucky-wheel').fields({
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
      this.$lucky = new LuckyWheel({
        flag: 'MINI-WX',
        ctx,
        width: res[0].width,
        height: res[0].height,
        rAF: res[0].node.requestAnimationFrame,
        setInterval,
        clearInterval,
      }, {
        blocks: data.blocks,
        prizes: data.prizes,
        buttons: data.buttons,
        defaultConfig: data.defaultConfig,
        defaultStyle: data.defaultStyle,
        start: (...rest) => {
          this.triggerEvent('start', ...rest)
        },
        end: (...rest) => {
          this.triggerEvent('end', ...rest)
        },
      })
    })
  },
  methods: {
    toPlay(e) {
      const ctx = this.ctx
      ctx.beginPath()
      ctx.arc(0, 0, this.$lucky.maxBtnRadius, 0, Math.PI * 2, false)
      if (!ctx.isPointInPath(e.changedTouches[0].x * this.dpr, e.changedTouches[0].y * this.dpr)) {
        return
      }
      // 触发 lucky-canvas 的抽奖逻辑
      this.$lucky.startCallback()
    },
    play(...rest) {
      this.$lucky.play(...rest)
    },
    stop(...rest) {
      this.$lucky.stop(...rest)
    },
  },
})
