$(document).ready(function() {
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
});
