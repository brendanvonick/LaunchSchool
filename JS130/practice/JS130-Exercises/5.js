let Account = (function(email, password, firstName, lastName) {
  const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                '0123456789';
  function anonymize() {
    let str = '';
    for (let strLength = 0; strLength < 16; strLength++) {
      str += CHARS[Math.floor(Math.random() * CHARS.length)];
    }

    return str;
  }

  return {
    init(email, password, firstName, lastName) {
      this.emailAddress = email;
      this.password = password;
      this.fName = firstName;
      this.lname = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(passwd) {
      if (this._validatePassword(passwd)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(passwd, newPasswd) {
      if (this._validatePassword(passwd)) {
        this.password = newPasswd;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(passwd) {
      if (this._validatePassword(passwd)) {
        return this.fName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName() {
      if (this._validatePassword(passwd)) {
        return this.lName;
      } else {
        return 'Invalid Password';
      }
    },

    email() {
      if (this._validatePassword(passwd)) {
        return this.email;
      } else {
        return 'Invalid Password';
      }
    },

    _validatePassword(passwd) {
      return passwd === this.password;
    }
  }
})();



let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
