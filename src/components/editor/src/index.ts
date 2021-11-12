// import { App } from 'vue'
import Editor from './index.vue'

Editor.install = (app) => {
  app.component(Editor.name, Editor)
}

export default Editor;
export const LvEditor = Editor;