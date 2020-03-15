export function constructorsAndClasses() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // new creates an empty object, and runs the Person function
  // with the 'this' pointed to the empty object
  const juan = new Person("juan ", "zalewski");
  console.info(juan);
}
