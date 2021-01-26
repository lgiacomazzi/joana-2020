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

function loadResorce() {
  var resorce = document.getElementById("resorce");
  resorce.innerHTML = '<object type="text/html" data="resorce.html" ></object>';
  console.log(resorce);
}
