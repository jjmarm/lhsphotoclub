// Basic page template

function openNav() {
  document.getElementById('sidenav').style.width = "100%";
}

function closeNav() {
  document.getElementById('sidenav').style.width = "0";
}

function returnHome() {
  window.location.href = "index.html"
}

$(document).ready(function () {
  var bannerClose = document.getElementById('close');
  var banner = document.getElementById('top-banner');
  var bannerLink = document.getElementById('toplink');

  bannerClose.onmouseover = function () {
    banner.classList.toggle("white");
    bannerClose.style.color = "black";
    bannerLink.style.color = "#6abab5";
  }

  bannerClose.onmouseout = function () {
    banner.classList.toggle("white");
    bannerClose.style.color = "white";
    bannerLink.style.color = "#ffeb3b";
  }

  bannerClose.onclick = function () {
    banner.classList.add("slide-up");
    //banner.style.display = "none";
  }

  bannerLink.onmouseover = function () {
    bannerLink.style.color = "white";
  }

  bannerLink.onmouseout = function () {
    bannerLink.style.color = "#ffeb3b"
  }
})
