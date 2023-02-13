(function (){
    function l(u, i) {
        var d = document;
        if (!d.getElementById(i)) {
            var s = d.createElement('script');
            s.src = u;
            s.id = i;
            d.body.appendChild(s);
        }
  };
  l('//code.jquery.com/jquery-3.6.1.slim.min.js', 'jquery')
  l('https://kit.fontawesome.com/05a6ec5dfd.js', 'font-awesome')
})();

document.getElementsByTagName("head")[0].innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
document.getElementsByTagName("head")[0].innerHTML +=
  '<link href="https://sstubblefield.github.io/HAVTools.user.css" crossorigin="anonymous" rel="stylesheet" type="text/css" />';

var path = window.location.pathname;
    path = path.split('/');
var pageName = path[path.length - 1];

document.body.classList.add(pageName);

document.getElementById('hdr1').insertAdjacentHTML('afterend', '<a href="/forest/status/home.asp" id="headerLogo">HeadlightAV</a>');


var tds = document.getElementsByTagName('td');
var tables = document.getElementsByTagName('table');
var img = document.querySelectorAll('img[width="875"]');

for (var i=0; i<tds.length; i++) {
  tds[i].removeAttribute("width");
}

for (var i=0; i<tables.length; i++) {
  tables[i].removeAttribute("width");
}

for (var i=0; i<img.length; i++) {
  img[i].remove()
}

document.body.insertAdjacentHTML('afterbegin', '<div id="nav-outside"><div id="nav-button-wrapper"><button type="button"><i class="fa-solid fa-bars"></i></button></div><div id="nav-container"><ul></ul></div></div><div id="overlay"></div><div id="content-outside"><div id="content"></div></div>');

function jqueryExists() {
  $('td > a[href*=".asp"]').not("[id='headerLogo']").removeAttr('onmouseover onmouseout');
  $('td > a[href*=".asp"] > img').not("[id='headerLogo']").remove();
  $('#nav-container ul').append($('td > a[href*=".asp"]').not("[id='headerLogo']"));
  $('#nav-container a').wrap('<li class="nav-item">');


  $('#nav-container a').each(function () {
    var nav = $(this).attr('href');

    switch (nav) {
      case 'home.asp':
        $('#nav-container a[href*="' + nav + '"]').html('Home').addClass('keep');
        break;

      case 'main.asp':
        $('#nav-container a[href="' + nav + '"]').html('Status Board').addClass('keep');
        break;

      case 'projects.asp':
        $('#nav-container a[href="' + nav + '"]').html('Project Listing').addClass('keep');
        break;

      case 'clients.asp':
        $('#nav-container a[href="' + nav + '"]').html('Client Listing').addClass('keep');
        break;

      case 'calendar.asp':
        $('#nav-container a[href="' + nav + '"]').html('Calendar').addClass('keep');
        break;

      case 'schedule.asp':
        $('#nav-container a[href="' + nav + '"]').html('Schedule Events').addClass('keep');
        break;
      case 'slist.asp':
        $('#nav-container a[href="' + nav + '"]').html('Schedule Listing').addClass('keep');
        break;
      case 'demos.asp':
        $('#nav-container a[href="' + nav + '"]').html('Demos').addClass('keep');
        break;
      case 'ulist.asp':
        $('#nav-container a[href="' + nav + '"]').html('My Profile').addClass('keep');
        break;
      case '../logout.asp':
        $('#nav-container a[href="' + nav + '"]').html('Log Out').addClass('keep');
        break;
      default:
        break;
    }
  });

  $('#nav-container a[class!="keep"]').parent().remove();

  function whichTransitionEvent() {
    var el = document.createElement("fake"),
      transEndEventNames = {
        WebkitTransition: "webkitTransitionEnd", // Saf 6, Android Browser
        MozTransition: "transitionend", // only for FF < 15
        transition: "transitionend", // IE10, Opera, Chrome, FF 15+, Saf 7+
      };

    for (var t in transEndEventNames) {
      if (el.style[t] !== undefined) {
        return transEndEventNames[t];
      }
    }
  }
  var transEndEventName = whichTransitionEvent();
   var body = $("body");
   var overlay = $("#overlay");
   var navTrigger = $("#nav-button-wrapper button");
   var navClose = $("#overlay,.fa-remove");

   function navCheck() {
     console.log("function is running");
     if (!body.hasClass("nav-open")) {
       body.addClass("nav-open");
       $("html,body").css({
         overflow: "hidden",
       });
     } else if (body.hasClass("nav-open") && overlay.is(":visible")) {
       body.addClass("nav-transitioning");
       overlay.one(transEndEventName, function () {
         body.removeClass("nav-transitioning nav-open");
       });
       $("html,body").removeAttr("style");
     }
   }
   navTrigger.on("click", navCheck);
   overlay.on("click", navCheck);
   navClose.on("click", navCheck);
}

function defer(method) {
  if (window.jQuery) {
    jqueryExists();
  } else {
    setTimeout(function () {
      defer(method);
    }, 50);
  }
}

defer();
