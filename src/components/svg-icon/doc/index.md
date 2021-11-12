## editor 编译器

### 基础用法

:::demo 
```html
  <template>
    <lv-svg-icon icon-class="build"/>
  </template>
  <script>
    export default {
      data() {
        return {
          noticeContent: '内容'
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