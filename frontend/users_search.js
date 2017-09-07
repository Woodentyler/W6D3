const APIUtil = require('./api_util');

const FollowToggle = require('./follow_toggle');

function UsersSearch (el) {
  this.$el = $(el);
  this.$input = this.$el.find('input[name="username"]');
  this.$ul = this.$el.find('.users');

  this.$input.on('input', this.handleInput.bind(this));
}

UsersSearch.prototype.handleInput = function(e) {
  e.preventDefault();

  let f = this;

  APIUtil.searchUsers(this.$input.val()).then((users) => {
    f.renderResults(users);
  });
};

UsersSearch.prototype.renderResults = function(users) {

  this.$ul.empty();

  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    let $a = $('<a></a>');

    $a.text(`${user.username}`);
    $a.attr('href',`/users/${user.id}`);


    let $ft = $('<button></button>');

    new FollowToggle($ft, {userId: user.id,
                           followState: user.followed ? 'followed' : 'unfollowed'});

    let $li = $('<li></li>');

    $li.append($a);
    $li.append($ft);

    this.$ul.append($li);
  }

};


module.exports = UsersSearch;
