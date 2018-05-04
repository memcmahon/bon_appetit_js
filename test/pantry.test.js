import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("exists", () => {
      expect(pantry).instanceOf(Pantry);
    });
  });
});
