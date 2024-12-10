import type { NodePlopAPI } from 'plop'
import storeGenerator from './store'

export default function (plop: NodePlopAPI) {
  plop.setHelper('orValues', (...values) => values.find(value => value))

  plop.setGenerator('store', storeGenerator)
}
