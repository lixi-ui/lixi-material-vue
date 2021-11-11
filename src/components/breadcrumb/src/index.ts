import Breadcrumb from './index.vue'

import type { App } from 'vue'

Breadcrumb.install = (app: App): void => {

  app.component(Breadcrumb.name, Breadcrumb)
}

const _Breadcrumb = Breadcrumb

export default _Breadcrumb
export const LvBreadcrumb = _Breadcrumb
