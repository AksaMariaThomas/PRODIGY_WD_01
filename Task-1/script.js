window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.querySelector("header");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.backgroundColor = "#555";
  } else {
    header.style.backgroundColor = "#333";
  }
}
