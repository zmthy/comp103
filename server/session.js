// Represents a session of a game.
function Session() {
  this.chat = [];
  this.users = [];
}

Session.prototype = {

  // Adds a record of a user login.
  addLogin: function(user) {
    this.users.push(user);
    this.chat.push({
      type: 'login',
      user: user
    });
  },

  // Adds a record of a user chatting.
  addText: function(user, text) {
    this.chat.push({
      type: 'text',
      user: user,
      text: text
    });
  },

  // Adds a record of a user logging out.
  addLogout: function(user) {
    this.users.splice(this.users.indexOf(user), 1);
    this.chat.push({
      type: 'logout',
      user: user
    });
  }
  
};

exports.Session = Session;
