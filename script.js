"use strict";

window.addEventListener("load", load);

function load() {
var score = 0;
var s = document.getElementById("submit");
s.addEventListener("click", function(){
    var sc = document.getElementById("table");
    sc.setAttribute("style", "text-align: center; font-size: 30px;");
    score += document.querySelectorAll('input[type="checkbox"]:checked').length;
    var t = "";
    if(score < 6){
        t = "Not an ABG<br><br>You do not exibhit any ABG esque traits, so either not an ABG or just really REALLY good at hiding it"
    }
    else if(score > 7 && score < 13){
        t = "Fun Zone<br><br>You're average ABG. You can hang out and meet with these ABG's as you're probably not crazy"
    }
    else if(score > 13 && score < 20){
        t = "Date Zone<br><br>You're an ABG that can be introduced to friends, family, anyone. Straight up ABG"
    }
    else if(score > 20 && score < 24){
        t = "Wifey Zone<br><br> You're someone to be considered for the long term"
    }
    else if(score >= 24){
        t = "Unicorn<br><br>You dont exist WTF"
    }
    sc.innerHTML= score + "<br>" + t;

})



}