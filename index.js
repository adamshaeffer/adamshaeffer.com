var coll = document.getElementsByClassName("collapsible");
var arrow = document.getElementById("dropdown");
var arrow2 = document.getElementById("dropdown2");
var i;

const jumpSlime = document.getElementById("jumpSlime");
const slimeDead = document.getElementById("slimeDead");
const slimeText = document.getElementById("eeh");
const slimeButt = document.getElementById("slimeAttack");
const slimeText2 = document.getElementById("effy");
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
    slimeText2.style.display = "none";
    if(health == 11) 
        slimeText.innerHTML = "Hey! Why are you attacking him? What'd he do to you?";
    if(health == 8)
        slimeText.innerHTML = "Yo, you should stop.";
    if(health == 5)
        slimeText.innerHTML = "Dude, just stop.";
    if(health == 3)
        slimeText.innerHTML = "'Well, I guess this is the end.'";
    if(health == 1)
        slimeText.innerHTML = "R.I.P. - Slimey Boy - 2021-Today - Sliced to death whilst hopping around.";
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

var modal = document.getElementById("mymodal");
var btn = document.getElementById("modalbtn");
var span = document.getElementsByClassName("x")[0];
var modal1 = document.getElementById("mymodal1");
var btn1 = document.getElementById("modalbtn1");
var span1 = document.getElementsByClassName("x1")[0];
var modal2 = document.getElementById("mymodal2");
var btn2 = document.getElementById("modalbtn2");
var span2 = document.getElementsByClassName("x2")[0];
var cmodal = document.getElementById("contactmodal");
var cbtn = document.getElementById("cmodalbtn");
var cspan = document.getElementsByClassName("cx")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
btn1.onclick = function() {
    modal1.style.display = "block";
} 
span2.onclick = function() {
    modal2.style.display = "none";
}
btn2.onclick = function() {
    modal2.style.display = "block";
} 
cbtn.onclick = function() {
    cmodal.style.display = "block";
}
cspan.onclick = function() {
    cmodal.style.display = "none";
}
window.onclick = function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
    if(event.target == modal1) {
        modal1.style.display = "none";
    }
    if(event.target == modal2) {
        modal2.style.display = "none";
    }
    if(event.target == cmodal) {
        cmodal.style.display = "none";
    }
}
document.onkeydown = function(e) {
    switch(e.which) {
        case 27: modal.style.display = "none",
        modal1.style.display = "none",
        modal2.style.display = "none",
        cmodal.style.display = "none";
    }
}