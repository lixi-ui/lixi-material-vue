// import { App } from 'vue'
import RightToolbar from './index.vue'

RightToolbar.install = (app) => {
  app.component(RightToolbar.name, RightToolbar)
}

export default RightToolbar;
export const LvRightToolbar = RightToolbar;