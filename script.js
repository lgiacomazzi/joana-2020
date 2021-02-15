window.addEventListener("load", (event) => {
  renderContent();
  scrollCheck();
});

function scrollCheck() {
  const portfolio = document.getElementsByClassName("portfolio-content")[0];
  const rightArrow = document.getElementsByClassName("right-arrow")[0];
  const leftArrow = document.getElementsByClassName("left-arrow")[0];

  // portfolio.onscroll = _.throttle(handle_scroll, 100);
  function handle_scroll(e) {
    if (portfolio.dataset.position == 0) {
      leftArrow.classList.add("disabled");
    }

    // var screenSize = portfolio.clientWidth;
    // var scrollStart = 0;
    // var scrollEnd = portfolio.scrollWidth - screenSize;
    console.log(portfolio.scrollLeft);
    // portfolio.dataset.position = Number(portfolio.scrollLeft);

    // if (portfolio.dataset.position == scrollStart) {
    //   leftArrow.classList.add("disabled");
    // }
    // if (portfolio.scrollLeft > scrollStart) {
    //   leftArrow.classList.remove("disabled");
    // }
    // if (portfolio.dataset.position == scrollEnd) {
    //   rightArrow.classList.add("disabled");
    // }
  }
}

function leftScroll(arrow) {
  var portfolio = document.getElementsByClassName("portfolio-content")[0];
  console.log(portfolio);
  portfolio.scrollLeft -= portfolio.clientWidth;
}

function rightScroll(arrow) {
  var portfolio = document.getElementsByClassName("portfolio-content")[0];
  portfolio.scrollLeft += portfolio.clientWidth;
}

function scrollDown() {
  var resorce = document.getElementsByClassName("job1")[0];
  resorceY = resorce.getBoundingClientRect().y;
  window.scrollTo(0, resorceY - 100);
}

function navigateTo(section) {
  var jobNumber = section.dataset.job;
  var url = "./pages/job.html?id=" + jobNumber;
  window.location.href = url;
  console.log(jobNumber);
}

function goBack(section) {
  history.back();
}

async function renderContent() {
  const id = identifyPage();
  const json = await loadJSON().then((data) => {
    return data;
  });
  renderElements(json, id);
  // console.log(json);
}

function identifyPage() {
  var searchQuery = window.location.search;
  var id = searchQuery.split("?id=")[1];
  return id;
}

async function loadJSON() {
  const response = await fetch("../joana.json").then((response) =>
    response.json()
  );
  return response;
}

function renderElements(json, id) {
  const job = json.jobs.filter((job) => job.id == id)[0];
  // startLoader();
  renderJobInfo(job);
  renderImages(job);
}

function renderJobInfo(job) {
  var pageTitle = (document.getElementsByTagName("title")[0].innerHTML =
    job.title + " | Joana Brum");
  var jobTitle = (document.getElementById("title").innerHTML = job.title);
  var numberImages = job.img.length;
  createIndicators(numberImages);
}

function createIndicators(numberImages) {
  var carousel = document.getElementsByClassName("carousel-indicators")[0];
  for (i = 0; i < numberImages; i++) {
    carousel.appendChild(document.createElement("LI"));
  }
}

function renderImages(job) {
  const images = job.img;

  for (i = 0; i < images.length; i++) {
    var image = images[i];
    var imageUrl = image.url;
    var imageTitle = image.title;
    var imageExtension = image.url
      .split("/")
      [image.url.split("/").length - 1].split(".")[1];

    var noExtensionUrl = imageUrl.slice(0, -imageExtension.length - 1);

    var picture = document.createElement("PICTURE");
    picture.classList.add("loader");

    var sourceWebp = document.createElement("SOURCE");
    sourceWebp.srcset = noExtensionUrl + ".webp";
    sourceWebp.type = "image/webp";
    // picture.appendChild(sourceWebp);

    var sourceDefault = document.createElement("SOURCE");
    sourceDefault.srcset = imageUrl;
    sourceDefault.type = "image/" + imageExtension;
    picture.appendChild(sourceDefault);

    var description = document.createElement("DIV");
    description.classList.add("portfolio-description");
    var title = document.createElement("P");
    title.classList.add("job-description");
    title.innerHTML = imageTitle;
    description.appendChild(title);
    picture.appendChild(description);

    var img = document.createElement("IMG");
    img.src = imageUrl;
    img.alt = image.title;
    img.loading = "lazy";

    picture.appendChild(img);

    document
      .getElementsByClassName("portfolio-content")[0]
      .appendChild(picture);
  }
}
