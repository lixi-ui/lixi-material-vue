// import { App } from 'vue'
import TopNav from './index.vue'

TopNav.install = (app) => {
  app.component(TopNav.name, TopNav)
}

export default TopNav;
export const LvTopNav = TopNav;