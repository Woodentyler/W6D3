const APIUtil = {

  followUser: id => (
    APIUtil.changeFollowStatus(id, 'POST')
  ),
  unFollowUser: id => (
    APIUtil.changeFollowStatus(id, 'DELETE')
  ),
  changeFollowStatus: (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method: `${method}`
    })
  ),
  searchUsers: (queryVal) => (
    $.ajax({
      url: `/users/search`,
      dataType: 'json',
      data: {query: queryVal}
    })
  ),
  createTweet: (data) => (
    $.ajax({
      url: 'tweets',
      method: 'POST',
      dataType: 'json',
      data: data
    })
  )
};

module.exports = APIUtil;
