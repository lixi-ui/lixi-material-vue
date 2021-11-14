// import { App } from 'vue'
import Crontab from './index.vue'

Crontab.install = (app) => {
  app.component(Crontab.name, Crontab)
}

export default Crontab;
export const LvCrontab = Crontab;