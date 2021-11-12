// import { App } from 'vue'
import FileUpload from './index.vue'

FileUpload.install = (app) => {
  app.component(FileUpload.name, FileUpload)
}

export default FileUpload;
export const LvFileUpload = FileUpload;