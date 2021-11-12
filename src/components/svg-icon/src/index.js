// import { App } from 'vue'
import SvgIcon from './index.vue'

SvgIcon.install = (app) => {
  app.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon;
export const LvSvgIcon = SvgIcon;