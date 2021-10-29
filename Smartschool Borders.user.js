// ==UserScript==
// @name         Smartschool Borders
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       Hanne Maes
// @match        https://*.smartschool.be/*
// @match        https://drive.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=smartschool.be
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // get url
    var url = window.location.href;
    console.log('Tampermonkey:', url);

    // choose color
    var color;
    var schoolLink;
    if     (url.includes('zandpoort'))  color = "Coral";
    else if(url.includes('pitzemburg')) color = "MediumAquamarine";
    else if(url.includes('drive'))      color = "darkgrey";

    // add border
    // document.getElementsByTagName('body')[0].style.borderTop = "5px solid " + color

    // my custom CSS
    var myCss = `
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        background-color:` + color + `;
        font-weight: bold;
    `;
    var myCssA = `
        font-size: 10px;
        color: rgba(255, 255, 255, 0.6);
        margin-left:  10px;
        margin-right: 10px;
        text-decoration: none;
    `;

    // my custom HTML
    var myDiv = document.createElement("mydiv"); // create the element using the createElement method
    myDiv.id = 'div_id';                         // set its unique ID
    myDiv.innerHTML = `
        <div style="` + myCss + `">
            <div> <!-- SCHOLEN -->
            <a style="` + myCssA + `" href="https://bazandpoort.smartschool.be/">Zandpoort</a>
            <a style="` + myCssA + `" href="https://bapitzemburg.smartschool.be/">Pitzemburg</a>

         </div><div> <!-- EXTRA -->
            <a style="` + myCssA + `" href="https://drive.google.com/drive/u/0/folders/1AuZJmhj_dJzCn33X3rmpsi9Edi3hf2I1">Drive</a>
            <a style="` + myCssA + `" href="http://lessenrooster.hannemaes.be/">Lessenrooster</a>
        </div>
    `;

    // place custom content
    var pageBody = document.body;
    pageBody.insertBefore(myDiv, pageBody.firstChild);

})();
