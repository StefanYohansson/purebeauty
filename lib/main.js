function startFlowType() {
  $('body').flowtype({
    minimum : 770,
    maximum : 1200
  });
}

function getUserInfo() {
  var url;

  url = 'https://api.github.com/users/' + window.GITHUB_USER;
  $.ajax({
    url: url
  })
  .done(function( user ) {
    var tmpl;

    tmpl = _.template(
      $('script#presentation_tmpl').html()
    );

    $("#presentation").html(
      tmpl({ 'user': user })
    );
  });
}

$(document).ready(function() {
  // startFlowType();
  getUserInfo();
});
