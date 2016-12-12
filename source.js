/**
 * Created by jc338335 on 12/12/16.
 */

"use strict";
window.onload = function() {
    var userName = "Jay"
    document.getElementById('body').innerHTML="Hello World " + userName;
};

function clickButton() {
    var userName = document.getElementById("userInput").value
    document.getElementById('body').innerHTML="Hello World " + userName;
};