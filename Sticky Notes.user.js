// ==UserScript==
// @name         Sticky Notes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.smartschool.be/Presence*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // let the user know the script is activted on this website
    console.log('Sticky Notes: activated');

    // init
    var today = new Date();
    var textArray = [];

    // mondag
    if(today.getDay() === 1) {
        textArray.push('LESUUR 1');
        textArray.push('  Alae = alé');
        textArray.push('  Albarea = albaré');
    } else if(today.getDay() === 4) {
        textArray.push('LESUUR 1');
        textArray.push('  Israe = iSra');
        textArray.push('  Christian = kristiAAn');
    }


    // sticky note styling
    var rectangle = document.createElement('div');
    rectangle.style.position = 'absolute';
    rectangle.style.border = '2px solid red'; // Rectangle border color
    rectangle.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; // Rectangle fill color with transparency
    rectangle.style.left = '70px'; // X-coordinate of the top-left corner of the rectangle
    rectangle.style.top = '140px'; // Y-coordinate of the top-left corner of the rectangle
    rectangle.style.width = '130px'; // Width of the rectangle
    rectangle.style.height = '100px'; // Height of the rectangle

    // generate text

    for (var i in textArray) {
        var textElement = document.createElement('div');
        textElement.innerText += textArray[i];
        rectangle.appendChild(textElement);
    }


    // add sticky note to page
    document.body.appendChild(rectangle)
})();