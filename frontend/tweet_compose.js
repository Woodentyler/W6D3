const APIUtil = require('./api_util.js');

function TweetCompose(el) {
  this.$el = $(el);

  this.$input = this.$el.find('textarea[\\[name=tweet\\[content]]');
  this.$input.on('input', this.handleInput.bind(this));


  this.$el.on('submit', this.submit.bind(this));

}

TweetCompose.prototype.submit = function (e) {
  e.preventDefault();

  this.$el.find(':input').prop('disabled', true);
  const data = this.$el.serializeJSON();
  APIUtil.createTweet(data);
};
