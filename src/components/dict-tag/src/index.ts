// import { App } from 'vue'
import DictTag from './index.vue'

DictTag.install = (app) => {
  app.component(DictTag.name, DictTag)
}

export default DictTag;
export const LvDictTag = DictTag;