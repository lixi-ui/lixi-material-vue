// import { App } from 'vue'
import ImageUpload from './index.vue'

ImageUpload.install = (app) => {
  app.component(ImageUpload.name, ImageUpload)
}

export default ImageUpload;
export const LvImageUpload = ImageUpload;