function getUserInfo() {
  var url;

  url = 'https://api.github.com/users/' + window.GITHUB_USER;
  fetch(url)
    .then(function(response) {
      if (response.status !== 200) {
        console.log("Looks like there was a problem");
      }

      response.json().then(function(user) {
        var tmpl;

        tmpl = _.template(
          document.getElementById('presentation_tmpl').innerHTML
        );

        document.getElementById('presentation').innerHTML = tmpl({ 'user': user });
      });
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
  getUserInfo();
});
