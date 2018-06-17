// Basic page template
$(document).ready(function () {
  var bannerClose = document.getElementById('close');
  var banner = document.getElementById('top-banner');

  bannerClose.onclick = function () {
    banner.classList.add("slide-up");
  }
})
