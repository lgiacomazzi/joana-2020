function leftScroll(arrow) {
  var portfolio = document.getElementById(arrow.parentElement.id);
  portfolio.scrollLeft -= portfolio.clientWidth;
  if (portfolio.dataset.position > 0) {
    portfolio.dataset.position = Number(portfolio.dataset.position) - 1;
    console.log(Number(portfolio.dataset.position));
  }
}

function rightScroll(arrow) {
  var portfolio = document.getElementById(arrow.parentElement.id);
  portfolio.scrollLeft += portfolio.clientWidth;
  console.log(portfolio.width);
  portfolio.dataset.position = Number(portfolio.dataset.position) + 1;
  console.log(Number(portfolio.dataset.position));
}

// initiate parallax effects
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);
// you can change parallax options using parallaxInstance
