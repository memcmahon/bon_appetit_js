import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"
import pry from 'pryjs'

describe("ShoppingList", () => {
  const pantry = new Pantry()
  const r = new Recipe("Cheese Pizza")
  r.addIngredient("Cheese", 20)
  r.addIngredient("Flour", 20)


  it("can build a shopping list", () => {
    pantry.addToShoppingList(r)

    expect(pantry.shoppingList).to.deep.equal({"Cheese": 20, "Flour": 20})
  })

  it("can add additional recipes to shopping list", () => {
    var secondRecipe = new Recipe("Spaghetti")
    secondRecipe.addIngredient("Noodles", 10)
    secondRecipe.addIngredient("Sauce", 10)
    secondRecipe.addIngredient("Cheese", 5)

    pantry.addToShoppingList(secondRecipe)

    expect(pantry.shoppingList).to.deep.equal({"Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10})
  })
})
