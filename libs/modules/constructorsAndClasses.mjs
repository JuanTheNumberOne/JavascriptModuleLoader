export function constructorsAndClasses() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getAge = () => {
      return 27 + " " + this.firstName;
    };
  }

  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };

  Person.prototype.getShortName = function() {
    return `${this.firstName}ito`;
  };

  return {
    Person: Person
  };
}
