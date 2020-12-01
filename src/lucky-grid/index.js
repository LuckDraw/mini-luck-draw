import { LuckyGrid } from 'lucky-canvas'

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
    rows: {
      type: String,
      optionalTypes: [Number],
      value: '3'
    },
    cols: {
      type: String,
      optionalTypes: [Number],
      value: '3'
    },
    blocks: {
      type: Array,
      value: []
    },
    prizes: {
      type: Array,
      value: []
    },
    button: {
      type: Object,
      value: {}
    },
    defaultConfig: {
      type: Object,
      value: {}
    },
    defaultStyle: {
      type: Object,
      value: {}
    },
    activeStyle: {
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
  methods: {
    toPlay(e) {
      const ctx = this.ctx
      const button = this.data.button
      if (!button) return
      ctx.beginPath()
      ctx.rect(...this.$lucky.getGeometricProperty([
        button.x,
        button.y,
        button.col || 1,
        button.row || 1
      ]))
      if (!ctx.isPointInPath(e.changedTouches[0].x * this.dpr, e.changedTouches[0].y * this.dpr)) {
        return
      }
      // 触发 lucky-canvas 的抽奖逻辑
      this.$lucky.startCallback()
    },
  },
  ready() {
    const query = wx.createSelectorQuery().in(this)
    query.select('#lucky-grid').fields({
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
      const $lucky = this.$lucky = new LuckyGrid({
        ctx,
        width: res[0].width,
        height: res[0].height,
      }, {
        rows: data.rows,
        cols: data.cols,
        blocks: data.blocks,
        prizes: data.prizes,
        button: data.button,
        defaultConfig: data.defaultConfig,
        defaultStyle: data.defaultStyle,
        activeStyle: data.activeStyle,
        start: () => {
          this.triggerEvent('start')
        },
        end: (prize) => {
          this.triggerEvent('end', prize)
        },
      })
      // 覆盖window对象的一些方法
      $lucky.rAF = res[0].node.requestAnimationFrame
      $lucky.cAF = res[0].node.cancelAnimationFrame
      $lucky.setInterval = setInterval
      $lucky.clearInterval = clearInterval
    })
  },
})
