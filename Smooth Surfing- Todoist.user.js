// ==UserScript==
// @name         Smooth Surfing: Todoist
// @namespace    http://tampermonkey.net/
// @version      0.3
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
    window.onload = function(){
        setTimeout(() => {
            window.scrollTo(0, document.body.offsetHeight);
            console.log("You've reached the bottom!");
        }, 3000);
     };

})();
