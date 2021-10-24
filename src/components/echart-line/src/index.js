// import { App } from 'vue'
import EchartLine from './index.vue'

EchartLine.install = (app) => {
  app.component(EchartLine.name, EchartLine)
}

export default EchartLine;

export const LxEchartLine = EchartLine;

