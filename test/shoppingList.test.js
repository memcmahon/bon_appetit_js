import { expect } from "chai"
import Pantry from "../lib/pantry"
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
})
