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

        var request = new XMLHttpRequest();
        request.open('GET', user.avatar_url + '&s=200', true);
        request.responseType = 'blob';
        request.onload = function() {
          var reader = new FileReader();
          reader.readAsDataURL(request.response);
          reader.onload = function(e) {
            user['avatar_url'] = e.target.result;
            document.getElementById('presentation').innerHTML = tmpl(
	      { 'user': user }
	    );
          };
        };
        request.send();
      });
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
  getUserInfo();
});
