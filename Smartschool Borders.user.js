// ==UserScript==
// @name         Smartschool Borders
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  try to take over the world!
// @author       Hanne Maes
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

    /* 
    replace <header with <div><header
    
    Dit werkt niet:
     header::before {
     content: '<a href="test">test</a>';
     } 
     */

})();
