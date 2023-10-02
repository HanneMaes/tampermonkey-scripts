// ==UserScript==
// @name         Smartschool Borders
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  try to take over the world!
// @author       Hanne Maes
// @match        https://*.smartschool.be/*
// @match        https://drive.google.com/*
// @icon         https://raw.githubusercontent.com/HanneMaes/hannemaes/master/docs/android-chrome-192x192.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // get url
    var url = window.location.href;
    console.log('Tampermonkey Smartschool Borders:', url);

    // do not continue when sending a message or the border will be included in the message itself
    // do not continue when writing klassenraadcommentaar
    if (url.includes('composeMessage') == false && url.includes('classcouncil') == false && url.includes('lvs') == false && url.includes('Uploadzone') == false) {

        // choose color
        var color;
        var schoolLink;
        if     (url.includes('zandpoort'))  color = "Coral";
        else if(url.includes('pitzemburg')) color = "MediumAquamarine";
        else if(url.includes('drive'))      color = "darkgrey";

        // my custom CSS
        var myCss = `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color:` + color + `;
        font-weight: bold;
        width: 100%;
        height: 10px;
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
        <!--
            <div>
                <a style="` + myCssA + `" href="https://bazandpoort.smartschool.be/">Zandpoort</a>
                <a style="` + myCssA + `" href="https://bapitzemburg.smartschool.be/">Pitzemburg</a>
            </div>
            <div>
                <a style="` + myCssA + `" href="https://drive.google.com/drive/u/0/folders/1AuZJmhj_dJzCn33X3rmpsi9Edi3hf2I1">Drive</a>
                <a style="` + myCssA + `" href="https://www.notion.so/hannemaes/School-51befb4444e14fa881677da57cfa0e88/">Notion</a>
                <a style="` + myCssA + `" href="https://www.notion.so/hannemaes/Smartschool-beheer-b71371031d864c61acb53a9936531d0d">Notion Smartschool</a>
            </div>
            <div>
                <a style="` + myCssA + `" href="http://lessenrooster.hannemaes.be/">Lessenrooster</a>
                <a style="` + myCssA + `" href="https://calendar.google.com/calendar/u/1/r">Calendar</a>
                <a style="` + myCssA + `" href="https://github.com/HanneMaes/tampermonkey-scripts/blob/main/Smartschool%20Borders.user.js">2.2</a>
            </div>
         -->
         </div>
         `;

        // place custom content
        var pageBody = document.body;
        pageBody.insertBefore(myDiv, pageBody.firstChild);

        //console.log('Tampermonkey Smartschool Borders:', myDiv);

    } // url.includes('composeMessage')
})();