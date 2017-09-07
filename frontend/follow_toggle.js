const APIUtil = require('./api_util');

function FollowToggle(el, options) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id') || options.userId;
  this.followState = this.$el.data('initial-follow-state') || options.followState;
  this.render();
  this.$el.on('click', this.handleClick.bind(this));
}

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") {
    this.$el.html("Follow");
  } else {
    this.$el.html("Unfollow");
  }
};

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();

  if (this.followState === 'followed') {
    this.followState = 'unfollowing';
    this.render();

    APIUtil.unFollowUser(this.userId).then(() => {
      alert('successful unfollow'); // successful promise callback
      this.followState = 'unfollowed';
      this.render();
    });

  } else if (this.followState === 'unfollowed') {
    this.followState = 'following';
    this.render();


    APIUtil.followUser(this.userId).then(() => {
      alert('successful follow'); // successful promise callback
      this.followState = 'followed';
      this.render();
    });

  }



  // $.ajax({
  //   url: `/users/${this.userId}/follow`,
  //   method: this.followState === 'followed' ? 'DELETE' : 'POST',
  //   dataType:'json',
  //   success: function abra() {
  //     this.toggleFollowState();
  //     this.render();
  //   }.bind(this)
  // });

};

FollowToggle.prototype.toggleFollowState = function () {

  this.followState === 'followed' ? this.followState = 'unfollowed' :
                                    this.followState = 'followed';

  // if (this.folllowState === 'followed') {
  //   this.followState = 'unfollowed';
  // } else {
  //   this.followState = 'unfollowed';
  // }
  // old stuff here

};

module.exports = FollowToggle;
