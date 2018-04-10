'use strict';

let gotoOptions = document.getElementById('gotoOptions');
let gotoAbout = document.getElementById('gotoAbout');

gotoOptions.onclick = function(element) {
    var win = window.open('/options/options.html', '_blank');
    win.focus();
}

gotoAbout.onclick = function(element) {
    var win = window.open('/about/about.html', '_blank');
    win.focus();
}