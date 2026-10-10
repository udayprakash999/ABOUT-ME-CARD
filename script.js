const follow = document.getElementById("follow");

function following(event) {
  event.preventDefault();

  follow.innerHTML = '<i class="fa-regular fa-face-smile-beam"></i>';

  window.open("https://github.com/udayprakash999", "_blank");
}
