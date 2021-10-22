// ==UserScript==
// @name         Smartschool Zandpoort
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  try to take over the world!
// @author       You
// @match        https://*.smartschool.be/*
// @icon         https://www.google.com/s2/favicons?domain=smartschool.be
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // get url
    var url = window.location.href
    console.log('Tampermonkey:', url)

    // choose color
    var color
    if     (url.includes('zandpoort'))  color = "Coral"
    else if(url.includes('pitzemburg')) color = "MediumAquamarine"

    document.getElementsByTagName('body')[0].style.borderTop = "5px solid " + color
})();
