export function reflectionAndExtend() {
  // create function and add object to prototype
  function baseObjectClass() {}
  baseObjectClass.prototype = {
    property1: "prop1",
    method1: function() {
      return this.property1 + " with method";
    }
  };

  // Create new object and add property 2
  const inheritingObject = new baseObjectClass();
  inheritingObject.property2 = "prop2";

  /**
   * Loop over members of the object (proto included if flag set to true)
   */
  function getObjectMembers(object, showOnlyOwnProperties) {
    if (typeof object === "object") {
      for (const key in object) {
        if (showOnlyOwnProperties || object.hasOwnProperty(key)) {
          console.info(key + " : " + inheritingObject[key]);
        }
      }
    }
  }

  getObjectMembers(inheritingObject, true);

  // --------------------------------------------------------
  const inheritingObject3 = {
    getStonks: () => "STONKS!"
  };

  const inheritingObject4 = {
    getSmort: () => "MORE SMORT!"
  };

  const extensions = [inheritingObject3, inheritingObject4];

  console.info(inheritingObject);
  // combines the properties of the other objects to the first
  _.extend(inheritingObject, ...extensions);
  console.info(inheritingObject);
}
