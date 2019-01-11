# MP_NavigationBar

小程序自定义全局、单页面导航栏


### 按钮（点击跳转子页面）-全局
* 调试基础库>=1.9.0
* 微信客户端>=6.6.0

```
// app.json
{
  "usingComponents": {
    "navigationBar": "/components/navigationBar/navigationBar"
  },
  "window": {
    "navigationStyle": "custom"
  } 
}
```

### 按钮（点击跳转自定义页面）-单页面
* 调试基础库>=2.4.3
* 微信客户端版本>=7.0.0

```
// app.json
{
  "window": {
    "navigationStyle": "default"
  } 
}
// end.json(自定义的页面)
{
  "navigationStyle": "custom",
  "usingComponents": {
    "navigationBar": "/components/navigationBar/navigationBar"
  }
}

```



