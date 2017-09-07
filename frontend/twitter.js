const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search');


$( document ).ready(function() {
  $('button.follow-toggle').each((index, button) => {
    let ft = new FollowToggle(button);
  });

  $('nav.users-search').each((index, field) => {
    let us = new UsersSearch(field);
  });

});
