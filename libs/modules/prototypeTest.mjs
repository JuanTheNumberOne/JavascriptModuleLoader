export function prototypeTest() {
  const person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  const john = {
    firstName: "John",
    lastName: "Doe"
  };

  const jane = {
    firstName: "Jane"
  };

  john.__proto__ = person; // don't really do this EVER!, it can slow the browser
  jane.__proto__ = john; // don't really do this EVER!, it can slow the browser
  console.info(john.getFullName()); // outputs John Doe
  console.info(jane.getFullName()); // outputs Jane Doe

  function testFunction() {}
  testFunction.prototype.newProperty = "Hue";
  const testPrototype = new testFunction();
  console.info(testPrototype);
  console.info(testPrototype.newProperty);
  console.info(testPrototype.__proto__);
  console.info(testFunction.prototype.newProperty);
  console.info("changing object property");
  testPrototype.newProperty = 1235;
  console.info(testPrototype.newProperty);
  console.info(testFunction.prototype.newProperty);
}
