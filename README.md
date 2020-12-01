

## 在 微信小程序 中使用

### 方式 1：通过 npm 安装

1. 先找到小程序项目的根目录，看是否有`package.json`文件，**如果没有就执行下面的命令**来创建该文件

```shell
npm init -y
```

2. 安装 npm 包

```shell
npm install mini-luck-draw
```

3. 构建 npm

`微信开发者工具`找到左上角点击 `工具` > `构建 npm` > `构建成功`

4. 引入自定义组件

```json
{
  "usingComponents": {
    "lucky-wheel":"/miniprogram_npm/mini-luck-draw/lucky-wheel/index",
    "lucky-grid":"/miniprogram_npm/mini-luck-draw/lucky-grid/index"
  }
}
```

4. 我在这里提供一个简略的 demo 供你进行测试

```html
<view>
  <lucky-wheel
    id="myLucky"
    width="500rpx"
    height="500rpx"
    blocks="{{blocks}}"
    prizes="{{prizes}}"
    buttons="{{buttons}}"
    defaultStyle="{{defaultStyle}}"
    bindstart="start"
    bindend="end"
  />
</view>
```

```js
const app = getApp()
Page({
  data: {
    prizes: [
      { title: '1元红包', background: '#f9e3bb', fonts: [{ text: '1元红包', top: '18%' }] },
      { title: '100元红包', background: '#f8d384', fonts: [{ text: '100元红包', top: '18%' }] },
      { title: '0.5元红包', background: '#f9e3bb', fonts: [{ text: '0.5元红包', top: '18%' }] },
      { title: '2元红包', background: '#f8d384', fonts: [{ text: '2元红包', top: '18%' }] },
      { title: '10元红包', background: '#f9e3bb', fonts: [{ text: '10元红包', top: '18%' }] },
      { title: '50元红包', background: '#f8d384', fonts: [{ text: '50元红包', top: '18%' }] },
    ],
    defaultStyle: {
      fontColor: '#d64737',
      fontSize: '14px'
    },
    blocks: [
      { padding: '13px', background: '#d64737' }
    ],
    buttons: [
      { radius: '50px', background: '#d64737' },
      { radius: '45px', background: '#fff' },
      { radius: '41px', background: '#f6c66f', pointer: true },
      {
        radius: '35px', background: '#ffdea0',
        fonts: [{ text: '开始\n抽奖', fontSize: '18px', top: -18 }]
      }
    ],
  },
  start () {
    // 获取抽奖组件实例
    const child = this.selectComponent('#myLucky')
    // 调用play方法开始旋转
    child.$lucky.play()
    // 用定时器模拟请求接口
    setTimeout(() => {
      // 3s 后得到中奖索引
      const index = Math.random() * 6 >> 0
      // 调用stop方法然后缓慢停止
      child.$lucky.stop(index)
    }, 3000)
  },
  end (event) {
    // 中奖奖品详情
    console.log(event.detail)
  }
})
```
