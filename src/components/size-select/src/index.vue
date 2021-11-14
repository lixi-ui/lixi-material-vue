<template>
  <lx-dropdown trigger="click" @command="handleSetSize">
    <div>
      <lv-svg-icon class-name="size-icon" icon-class="size" />
    </div>
    <lx-dropdown-menu slot="dropdown">
      <lx-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="size===item.value" :command="item.value">
        {{
          item.label }}
      </lx-dropdown-item>
    </lx-dropdown-menu>
  </lx-dropdown>
</template>

<script>
import { LxDropdown, LxDropdownMenu, LxDropdownItem } from 'lixi-ui-vue/lib/cjs/dropdown'

export default {
  name: 'LvSizeSelect',
  components: {
    LxDropdown,
    LxDropdownMenu,
    LxDropdownItem
  },
  data() {
    return {
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
        { label: 'Mini', value: 'mini' }
      ]
    }
  },
  computed: {
    size() {
      return 16
    }
  },
  methods: {
    handleSetSize(size) {
      this.$ELEMENT.size = size
      this.$store.dispatch('app/setSize', size)
      this.refreshView()
      this.$message({
        message: 'Switch Size Success',
        type: 'success'
      })
    },
    refreshView() {
      // In order to make the cached page re-rendered
      this.$store.dispatch('tagsView/delAllCachedViews', this.$route)

      const { fullPath } = this.$route

      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    }
  }

}
</script>
