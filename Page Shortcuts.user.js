// ==UserScript==
// @name         Page Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add custom shortcuts to pages
// @author       Hanne Maes
// @match        *://*/*
// @icon         https://raw.githubusercontent.com/HanneMaes/hannemaes/master/docs/android-chrome-192x192.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // trigger on keypress
    document.addEventListener("keydown", function (e) {

        // get the code of the pressed key
        console.log('Tampermonkey Page Shortcuts - key:', e.keyCode);

        // ctrl-alt-e
        if(e.ctrlKey  &&  e.altKey  &&  e.key === "e") {  // case sensitive
            console.log('CTRL ALT E GREAT SUCCESS !!!!')
        }

    });
})();