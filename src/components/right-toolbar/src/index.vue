<template>
  <div class="top-right-btn">
    <lx-row>
      <lx-tooltip class="item" effect="dark" :content="showSearch ? '隐藏搜索' : '显示搜索'" placement="top">
        <lx-button size="mini" circle icon="lx-icon-search" @click="toggleSearch()" />
      </lx-tooltip>
      <lx-tooltip class="item" effect="dark" content="刷新" placement="top">
        <lx-button size="mini" circle icon="lx-icon-refresh" @click="refresh()" />
      </lx-tooltip>
      <lx-tooltip class="item" effect="dark" content="显隐列" placement="top" v-if="columns">
        <lx-button size="mini" circle icon="lx-icon-menu" @click="showColumn()" />
      </lx-tooltip>
    </lx-row>
    <lx-dialog :title="title" v-model="open" append-to-body>
      <lx-transfer
        :titles="['显示', '隐藏']"
        v-model="value"
        :data="columns"
        @change="dataChange"
      ></lx-transfer>
    </lx-dialog>
  </div>
</template>
<script>
import LxRow from 'lixi-ui-vue/lib/cjs/row'
import LxTooltip from 'lixi-ui-vue/lib/cjs/tooltip'
import LxButton from 'lixi-ui-vue/lib/cjs/button'
import LxDialog from 'lixi-ui-vue/lib/cjs/dialog'
import LxTransfer from 'lixi-ui-vue/lib/cjs/transfer'

export default {
  name: "LvRightToolbar",
  components: {
    LxRow,
    LxTooltip,
    LxButton,
    LxDialog,
    LxTransfer
  },
  data() {
    return {
      // 显隐数据
      value: [],
      // 弹出层标题
      title: "显示/隐藏",
      // 是否显示弹出层
      open: false,
    };
  },
  props: {
    showSearch: {
      type: Boolean,
      default: true,
    },
    columns: {
      type: Array,
    },
  },
  created() {
    // 显隐列初始默认隐藏列
    for (let item in this.columns) {
      if (this.columns[item].visible === false) {
        this.value.push(parseInt(item));
      }
    }
  },
  methods: {
    // 搜索
    toggleSearch() {
      this.$emit("update:showSearch", !this.showSearch);
    },
    // 刷新
    refresh() {
      this.$emit("queryTable");
    },
    // 右侧列表元素变化
    dataChange(data) {
      for (var item in this.columns) {
        const key = this.columns[item].key;
        this.columns[item].visible = !data.includes(key);
      }
    },
    // 打开显隐列dialog
    showColumn() {
      this.open = true;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep(.lx-transfer__button) {
  border-radius: 50%;
  padding: 12px;
  display: block;
  margin-left: 0px;
}
::v-deep(.lx-transfer__button:first-child) {
  margin-bottom: 10px;
}
</style>
