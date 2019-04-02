class User {
  constructor(name) {
    this.name = name;
  }

  hello(who) {
    console.log("hello, " + who.name);
  }
}

exports.User = User;