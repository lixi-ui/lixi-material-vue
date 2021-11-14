// import { App } from 'vue'
import PanThumb from './index.vue'

PanThumb.install = (app) => {
  app.component(PanThumb.name, PanThumb)
}

export default PanThumb;
export const LvPanThumb = PanThumb;