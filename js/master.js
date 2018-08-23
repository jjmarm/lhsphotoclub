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

function moveArrow() {
  console.log("hover");
  $('#ig-arrow').classList.toggle("moveRight");
}

$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = 'components/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });

$(document).ready(function () {
  // $("#navbar").load("/components/nav.html");
  // $("#underconstr").load("/components/construction.html");

  // Variable Declarations for elements
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

  $(function () {
    for (var i = 1; i < 18; i++) {
      var caption;
      switch (i) {
        case 1:
          caption = 'A mouse in the woods. June 2016. <a href="http://instagram.com/abhinav.mukherjee59714">@abhinav.mukherjee59714</a>'
          break;
        case 2:
          caption = '🌸flowers in front of temple by Catherine Sun <a href="http://instagram.com/catherinesun7091">@catherinesun7091</a>'
          break;
        case 3:
          caption = 'By <a href="http://instagram.com/julianmarmier">@julianmarmier</a>'
          break;
        case 4:
          caption = 'A droplet 💧 on a flower by <a href="http://instagram.com/abhinav.mukherjee59714">@abhinav.mukherjee59714</a>'
          break;
        case 5:
          caption = 'Temple of Poseidon<br>Photography by: Katie Chamberlain <a href="http://instagram.com/katiebc_">@katiebc_</a>'
          break;
        case 6:
          caption = "Photographer: Grégory Murphy"
          break;
        case 7:
          caption = "Photographer: Vibhuti Pathare"
          break;
        case 8:
          caption = "Photographer: Divya Jain"
          break;
        case 9:
          caption = "Photographer: Katie Chamberlain"
          break;
        case 10:
          caption = "Photographer: Sean Feldman"
          break;
        case 11:
          caption = "Photographer: Niha Putta"
          break;
        case 12:
          caption = "Photographer: Jenny L"
          break;
        case 13:
          caption = "Photographer: Vibhuti Pathare"
          break;
        case 14:
          caption = "Photographer: Kavi Farr"
          break;
        case 15:
          caption = "Photographer: Katie Chamberlain"
          break;
        case 16:
          caption = "Photographer: Grégory Murphy"
          break;
        case 17:
          caption = "Photographer: Audrey Dupupet"
          break;
        case 18:
          caption = "Welcome to LHS Photography Club. Photographer: Divya Jain"
          break;
        default:
          caption = ""
          break;
      }
      $(".lb-wrapper").append("<a href='img/index/" + i + ".jpg' data-lightbox='indexPhotos' data-title='" + caption + "'><img src='img/index/" + i + ".jpg'></a>")
    }
  })
})
