import components from './components.ts'

import './style/src/index.scss'

import './components/icon-select/src/icons/index.js' // icon


var install = function (Vue) {
  Object.keys(components).forEach((key)=>{
    Vue.use(components[key])
  })
}

export default {
  install,
  version: '0.0.4'
}

