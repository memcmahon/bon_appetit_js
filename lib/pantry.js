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

  addToShoppingList(recipe) {
    var ingredients = recipe.ingredients

    Object.keys(ingredients).forEach((key) => {
      if(this.shoppingList[key]) {
        this.shoppingList[key] += ingredients[key]
      } else {
        this.shoppingList[key] = ingredients[key]
      }
    })
  }
}
