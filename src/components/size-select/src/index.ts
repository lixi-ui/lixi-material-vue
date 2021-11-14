// import { App } from 'vue'
import SizeSelect from './index.vue'

SizeSelect.install = (app) => {
  app.component(SizeSelect.name, SizeSelect)
}

export default SizeSelect;
export const LvSizeSelect = SizeSelect;