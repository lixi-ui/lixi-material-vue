## breadcrumb 面包屑

### 基础用法

:::demo 
```html
  <lv-breadcrumb></lv-breadcrumb>
```
:::

##### 特别注意,需要与vue-router配合使用

```js
var router = [
  {
    path: '/doc/breadcrumb',
    name: 'breadcrumb',
    meta: {
      title: 'breadcrumb 面包屑'
    }
  }
]
```

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| router      | 路由           | object  |                                                    | —      |
| path        | 路径           | string  |                                                    | —      |
| name        | 名称           | string  |                                                    | —      |
| mate        | 元数据         | object  |                                                    | —      |
| tatle       | 标题            | string  |                                                    | —      |