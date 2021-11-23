## dict-tag 字典标签

### 基础用法

:::demo 
```html
  <template>
    <lv-dict-tag :options="options" value="0"></lv-dict-tag>
    <lv-dict-tag :options="options" value="1"></lv-dict-tag>
  </template>
  <script>
    export default {
      data() {
        return {
          options: [
            {
              "dictLabel":"正常",
              "dictValue":"0",
              "cssClass":"",
              "listClass":"primary"
            },
            {
              "dictLabel":"停用",
              "dictValue":"1",
              "cssClass":"",
              "listClass":"danger"
            }
          ]
        }
      }
    }
  </script>
```
:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |


### Options Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |