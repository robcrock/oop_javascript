// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // call the constructor you'll inherit from
  Person.call(this, firstName, lastName)

  this.phone = phone;
  this.membership = membership;
}

// Inherit from the Person
Customer.prototype = Object.create(Person.prototype);

// Make Customer prototype return customer
Customer.prototype.constructor = Customer;

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

// Genertic personal greeting
Person.prototype.greeting = function() {
  return `Hello ${this.getFullName()}!`;
}

// Custom customer greeting
Customer.prototype.greeting = function () {
  return `Hello ${this.getFullName()}. Welcome to our store!`;
}

const john = new Person('John', 'Doe', '05-11-1989');

const lisa = new Customer('Lisa', 'Duo', '+6143572633', 'Premium');

console.log(lisa.greeting());