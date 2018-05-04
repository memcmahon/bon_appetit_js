export default class Pantry {
  constructor () {
    this.stock = {}
  }

  checkStock (item) {
    if(this.stock[item]) {
      return this.stock.item
    } else {
      return 0
    }
  }
}
