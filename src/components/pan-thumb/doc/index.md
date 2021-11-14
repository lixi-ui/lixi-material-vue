## pan-thumb 头像上传

### 基础用法

:::demo 
```html
  <template>
    <lv-pan-thumb image="https://img-blog.csdnimg.cn/20201014180756738.png?x-oss-process=image/resize,m_fixed,h_64,w_64"/>
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