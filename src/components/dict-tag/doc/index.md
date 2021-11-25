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
| options     | 字典选项       | array  |     参看  options Attributes                         | —      |
| value       | 选中值         | string  |                                                    | —      |


### Options Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| dictLabel   | 字典名称       | string  |                                                     | —      |
| dictValue   | 字典值         | string  |                                                     | —      |
| cssClass    | 标签样式       | string  |                                                     | —      |
| listClass   | 列表样式       | string  |                                                     | —      |