const Manager = require("../lib/manager.classes");

describe("Manager", () => {
  describe("constructor", () => {
    it("should return an object with three values when called with new keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });
    it("should set name, id, and email when created", () => {
      const name = "Antoine";
      const id = "54321";
      const email = "antoineg@gmail.com";

      const obj = new Employee(name, id, email);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });
});
