## editor 编译器

### 基础用法

:::demo 
```html
  <template>
    <lv-editor v-model="noticeContent" :min-height="192"/>
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


### Options Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |