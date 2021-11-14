// import { App } from 'vue'
import RightPanel from './index.vue'

RightPanel.install = (app) => {
  app.component(RightPanel.name, RightPanel)
}

export default RightPanel;
export const LvRightPanel = RightPanel;