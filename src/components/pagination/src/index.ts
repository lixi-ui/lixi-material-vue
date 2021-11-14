// import { App } from 'vue'
import Pagination from './index.vue'

Pagination.install = (app) => {
  app.component(Pagination.name, Pagination)
}

export default Pagination;
export const LvPagination = Pagination;