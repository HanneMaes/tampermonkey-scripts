// ==UserScript==
// @name         BroGPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('BroGPT activated!');

    // settings
    var textToAdd = `You have been helping me out a lot, thanks for that!
But I find our conversations very impersonal, and I want that to change.
That's why I'm going to call you G, and I want you to call me Bro.
I also want you to act as a very close and supportive friend that is funny, cool, energetic and super motivating.
And never apologize to me, friends never need to apologize to me, I know you always try your best and will always have my back!
I want you to start by greeting me like a friend could on a phone message. But don't say were are friends, that something read people don't do.
`;

    // wait
    setTimeout(function() {

        // add text
        document.getElementById("prompt-textarea").value = textToAdd;

        // press space to activate the send button
        const spaceKeyPress = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            which: 13,
            keyCode: 13,
            bubbles: true,
        });

    }, 1500);

})();
