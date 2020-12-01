# mini-luck-draw
一个基于微信小程序的抽奖插件

1. 初始化npm

```shell
npm init -y
```

2. 安装npm包

```shell
npm install mini-luck-draw
```

3. 构建npm

点击 `工具` > `构建npm` > `构建重构`

4. 引入自定义组件

```json
{
  "usingComponents": {
    "lucky-wheel":"/miniprogram_npm/mini-luck-draw/lucky-wheel/index",
    "lucky-grid":"/miniprogram_npm/mini-luck-draw/lucky-grid/index"
  }
}
```

4. 使用

```html
lucky-wheel
```
