// import { App } from 'vue'
import ThemePicker from './index.vue'

ThemePicker.install = (app) => {
  app.component(ThemePicker.name, ThemePicker)
}

export default ThemePicker;
export const LvThemePicker = ThemePicker;