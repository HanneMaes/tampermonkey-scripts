// ==UserScript==
// @name         Search Engine Shortcuts
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Search Engine Shortcuts: Google detected')

    var searchResults = []

    // add the styling to the page
    document.head.innerHTML = document.head.innerHTML + `
<link href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap" rel="stylesheet">
<style>
  .googleSearchResultsShortcut, .googleSearchResultsShortcut::after {
    border-radius: 5px;
    border: 2px solid black;
    cursor: default;
  }
  .googleSearchResultsShortcut {
    /* positioning */
    position: absolute;
    right: 20px;
    top: 0px;
    /* size */
    width: 20px;
    height: 20px;
    /* background */
    background-color: white;
    border-radius: 5px;
    /* typography */
    font-family: 'Nova Mono', monospace;
    color: black;
    /* center text */
    text-align: center;
    line-height: 19px;
  }
  .googleSearchResultsShortcut::after {
    content: '';
    display: block;
    /* draw this underneath the div */
    z-index: -1;
    /* size */
    width: 20px;
    height: 20px;
    /* positioning */
    position: relative;
    left: -2px;
    top: -15px;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
  }
</style>
`
    // loop trough ALL <a>
    var links = document.querySelectorAll('a');
    for(var i = 0; i < links.length; i++){

        // if it's not a link to google and not an empty link
        if(!(links[i].href.includes('google')) && links[i].href != "") {

            searchResults.push({
            html: links[i],      // get the search result HTML code so I can inject the shortcut icons
            href: links[i].href, // get the search result HREF so I can bind a shortcut to the link
        })
        }
    }

    // display the shortcut graphics
    var i = 0
    for (var i in searchResults) {
        if (i<9) { // only display the first 9 items

            searchResults[i].html.innerHTML = `
      <div style="position: relative; width: 0; height: 0; overfow: visible;">
        <div class="googleSearchResultsShortcut">` + parseInt(parseInt(i, 10) + 1, 10) + `</div>
      </div>
    ` + searchResults[i].html.innerHTML
            //console.log('- searchResults[i].html.innerHTML:', searchResults[i].html.innerHTML)

        }
    }

    // do this when a key is pressed
    document.addEventListener('keypress', logKey);
    function logKey(e) {
        window.location.href = searchResults[e.key-1].href
    }

})();
