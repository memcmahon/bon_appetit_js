import pry from 'pryjs'

export default class Pantry {
  constructor () {
    this.stock = {}
    this.shoppingList = {}
  }

  checkStock (item) {
    if(this.stock[item]) {
      return this.stock[item]
    } else {
      return 0
    }
  }

  restock (item, amount) {
    if (this.stock[item]) {
      this.stock[item] += amount
    } else {
      this.stock[item] = amount
    }
  }


}
