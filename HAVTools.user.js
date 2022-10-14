document.getElementsByTagName("head")[0].innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
document.getElementsByTagName("head")[0].innerHTML += '<link href="https://sstubblefield.github.io/HAVTools.user.css" rel="stylesheet" type="text/css" />';

var path = window.location.pathname;

path = path.split('/');
pageName = path[path.length - 1];

document.body.classList.add(pageName);
