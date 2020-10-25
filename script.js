function leftScroll(arrow) {
  var portfolio = document.getElementById(arrow.parentElement.id);
  portfolio.scrollLeft -= portfolio.clientWidth;
}

function rightScroll(arrow) {
  var portfolio = document.getElementById(arrow.parentElement.id);
  portfolio.scrollLeft += portfolio.clientWidth;
}
