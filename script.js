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
  var resorce = document.getElementById("job1");
  resorce.innerHTML = '<object type="text/html" data="resorce.html" ></object>';
  console.log(resorce);
}

function scrollDown() {
  var resorce = document.getElementsByClassName("job1")[0];
  resorceY = resorce.getBoundingClientRect().y;
  window.scrollTo(0, resorceY - 100);
  console.log(resorceY);
}

function navigateTo(section) {
  var jobNumber = section.className.split(" ")[0];
  var url = "./" + jobNumber + ".html";
  window.location.href = url;
  console.log(jobNumber);
}
