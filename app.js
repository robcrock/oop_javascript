function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970)
};

// Get fullname
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Mary get married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '05-11-1989');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary.getFullName());

mary.getsMarried('Smith');

console.log(mary.getFullName());