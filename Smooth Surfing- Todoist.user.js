// ==UserScript==
// @name         Smooth Surfing: Todoist
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Todoist: auto scroll down
// @author       Hanne Maes
// @match        https://todoist.com/*
// @icon         https://raw.githubusercontent.com/HanneMaes/firefox-smooth-surfing-addon/master/src/icons/icon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Smooth Surfing: Todoist')

    // wait & scroll down
    setTimeout(function() {
        console.log('Smooth Surfing: Scroll down')
        window.scrollTo(0, document.body.offsetHeight);
    }, 2000);

})();
