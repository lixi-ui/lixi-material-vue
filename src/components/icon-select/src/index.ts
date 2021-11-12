// import { App } from 'vue'
import IconSelect from './index.vue'

IconSelect.install = (app) => {
  app.component(IconSelect.name, IconSelect)
}

export default IconSelect;
export const LvIconSelect = IconSelect;