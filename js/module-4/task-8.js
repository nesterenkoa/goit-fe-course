/*
 * Расставь отсутствующие this в конструкторе Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;
  
  this.changePassword = function(newPassword) {
    this.password = newPassword;
  };
  
  this.getInfo = function() {
    console.log(`
      Login: ${this.login},
      Pass: ${this.password},
      Type: ${this.type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc");
console.log(account.password); // 'asdzxc'

account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
