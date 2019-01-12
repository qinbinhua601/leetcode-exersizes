/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  var map = {};
  // loop all accounts
  for(var i = 0; i < accounts.length; i++) {
    // get the customer's name and emails binding to the account
    var [name, ...emails] = accounts[i]
    for (var email of emails) {
      if (map.hasOwnProperty(email) && map[email] !== i) {
        // if find the match push all email to the matched array
        map[email].push(i)
      } else {
        map[email] = [i]
      }
    }
  }
  console.log('---------------------accounts---------------')
  console.log(accounts)
  console.log('-------------map----------')
  console.log(map)
  var result = []
  for(var i = 0; i < accounts.length; i++) {
    let [name, ...emails] = accounts[i]
  }
  return accounts
};

accountsMerge([["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]])