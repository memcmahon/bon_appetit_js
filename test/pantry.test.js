import { expect } from "chai"
import Pantry from "../lib/pantry"
import pry from 'pryjs'


describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry();

    it("exists", () => {
      expect(pantry).instanceOf(Pantry);
    });

    it("has stock", () => {
      expect(pantry.stock).to.deep.equal({});
    });

    it("has a shopping list", () => {
      expect(pantry.shoppingList).to.deep.equal({});
    })
  });

  describe("functions", () => {
    describe("checkStock", () => {
      const pantry = new Pantry();

      it("can check if something is in the pantry", () => {
        expect(pantry.checkStock("Cheese")).to.equal(0);
      });
    });

    describe("stock", () => {
      const pantry = new Pantry();

      it("can stock items", () => {
        pantry.restock("Cheese", 10);

        expect(pantry.checkStock("Cheese")).to.eq(10);

        pantry.restock("Cheese", 20);

        expect(pantry.checkStock("Cheese")).to.eq(30);
      });
    });
  });
});
