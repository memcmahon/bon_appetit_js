import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry();

    it("exists", () => {
      expect(pantry).instanceOf(Pantry);
    });

    it("has stock", () => {
      expect(pantry.stock).to.deep.equal({});
    })
  });

  describe("functions", () => {
    describe("checkStock", () => {
      const pantry = new Pantry();

      it("can check if something is in the pantry", () => {
        expect(pantry.checkStock("Cheese")).to.equal(0);
      });
    });
  });
});
