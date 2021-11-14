// import { App } from 'vue'
import Screenfull from './index.vue'

Screenfull.install = (app) => {
  app.component(Screenfull.name, Screenfull)
}

export default Screenfull;
export const LvScreenfull = Screenfull;