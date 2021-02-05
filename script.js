window.addEventListener("load", (event) => {
  checkWindowPosition();
});

function checkWindowPosition() {
  var portfolio = document.getElementsByClassName("portfolio-scroll-div")[0];
  var screenSize = portfolio.clientWidth;
  var scrollStart = 0;
  var scrollEnd = portfolio.scrollWidth - screenSize;
  console.log("scrollStart: " + scrollStart);
  console.log("portfolio: " + portfolio.scrollLeft);
  console.log("scrollEnd: " + scrollEnd);
  if (portfolio.scrollLeft == scrollStart) {
    console.log("inicio");
  } else if (portfolio.scrollLeft == scrollEnd) {
    console.log("fim");
  }
}

function leftScroll(arrow) {
  var portfolio = arrow.parentElement;
  portfolio.scrollLeft -= portfolio.clientWidth;
  checkWindowPosition();
  // if (portfolio.dataset.position > 0) {
  // portfolio.dataset.position = Number(portfolio.dataset.position) - 1;
  // console.log(Number(portfolio.dataset.position));
  // }
}

function rightScroll(arrow) {
  var portfolio = arrow.parentElement;
  portfolio.scrollLeft += portfolio.clientWidth;
  console.log("New portfolio: " + portfolio.scrollLeft);
  checkWindowPosition();
  // portfolio.dataset.position = Number(portfolio.dataset.position) + 1;
  // console.log(Number(portfolio.dataset.position));
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

function goBack(section) {
  history.back();
}
