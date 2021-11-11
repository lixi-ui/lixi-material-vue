<template>
  <span class="lv-tag">
    <template v-for="(item, index) in options">
      <template v-if="values.includes(item.dictValue)">
        <span
          v-if="item.listClass == 'default' || item.listClass == ''"
          :key="item.dictValue"
          :index="index"
          :class="item.cssClass"
          >{{ item.dictLabel }}</span
        >
        <lx-tag
          v-else
          :key="item.dictValue"
          :index="index"
          :type="item.listClass == 'primary' ? '' : item.listClass"
          :class="item.cssClass"
        >
          {{ item.dictLabel }}
        </lx-tag>
      </template>
    </template>
  </span>
</template>

<script>
import LxTag from 'lixi-ui-vue/lib/cjs/tag'
export default {
  name: "LvDictTag",
  props: {
    options: {
      type: Array,
      default: null,
    },
    value: [Number, String, Array],
  },
  components: {
    LxTag
  },
  computed: {
    values() {
      if (this.value !== null && typeof this.value !== 'undefined') {
        return Array.isArray(this.value) ? this.value : [String(this.value)];
      } else {
        return [];
      }
    },
  },
};
</script>
<style scoped>
.lx-tag + .lx-tag {
  margin-left: 10px;
}
.lv-tag + .lv-tag{
  margin-left: 10px;
}
</style>