var coll = document.getElementsByClassName("collapsible");
var arrow = document.getElementById("dropdown");
var arrow2 = document.getElementById("dropdown2");
var i;

const jumpSlime = document.getElementById("jumpSlime");
const slimeDead = document.getElementById("slimeDead");
const slimeText = document.getElementById("eeh");
const slimeButt = document.getElementById("slimeAttack");
var health = 11;
var size = 7;

for(i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (arrow2.style.display === "inline-block") {
            content.style.display = "none";
            arrow.style.display = "inline-block";
            arrow2.style.display = "none";
        } else {
            content.style.display = "block";
            arrow2.style.display = "inline-block";
            arrow.style.display = "none";
        }
    });
}

const slimeAttack = () => {
    splashfx();
    if(health == 11) 
        slimeText.innerHTML = "Hey! Why are you attacking him? Isn't he just sooo cute?";
    if(health == 10)
        slimeText.innerHTML = "Yoooo, you should stop.";
    if(health == 5)
        slimeText.innerHTML = "Dude, just stop.";
    if(health == 3)
        slimeText.innerHTML = "'Well, I guess this is the end.'";
    if(health == 2)
        slimeText.innerHTML = "'GOODBYE WORLD! It was nice while it lasted!'";
    if(health == 1)
        slimeText.innerHTML = "R.I.P. - Slimey Boy - 2021-Today - Murdered in cold blood by some lame-o";
    if(health == -3)
        slimeText.innerHTML = "There's nothing else, you killed him already.";
    if(health == -7)
        slimeText.innerHTML = "No seriously, there's no more.";
    if(health == -9) 
        slimeText.innerHTML = "Can't you read? Stop clicking!";
    if(health == -11)
        slimeText.innerHTML = "Well you leave me no other choice, don't click again, I'm warning you!";
    if(health == -12) {
        slimeText.innerHTML = "Now you don't get to enjoy any of my cool little art, let this be a lesson to you.";
        slimeDead.style.display = "none";
    }
    size -= .5;
    health--;
    if(health == 0) {
        jumpSlime.style.display = "none";
        slimeDead.style.display = "block";
    }
    jumpSlime.style.width = size+`vw`;
}

$(document).ready(function () {
    var duration = 150;
    var height = 30;
    $(document).mousemove(function () {});

    $("*").click(function (e) {
         $(".loader").offset({
            top: e.pageY - 13,
            left: e.pageX - 13
         });
         
    });
}