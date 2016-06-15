function showTexteDesign(){
  document.getElementById("texteDesign").style.visibility="visible";
  document.getElementById("portraitDesign").style.display="block";
  document.getElementById("portrait").style.display="none";
}

function hideTexteDesign(){
  document.getElementById("texteDesign").style.visibility="hidden";
  document.getElementById("portraitDesign").style.display="none";
  document.getElementById("portrait").style.display="block";
}


function showTexteDev(){
  document.getElementById("texteDev").style.visibility="visible";
  document.getElementById("portraitDev").style.display="block";
  document.getElementById("portrait").style.display="none";
}

function hideTexteDev(){
  document.getElementById("texteDev").style.visibility="hidden";
  document.getElementById("portraitDev").style.display="none";
  document.getElementById("portrait").style.display="block";
}



var slideIndex=1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imagesProjets");
  var y = document.getElementsByClassName("infos");
  var z = document.getElementsByClassName("site");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  if (n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = y.length}
  if (n > z.length) {slideIndex = 1}
  if (n < 1) {slideIndex = z.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     x[slideIndex-1].style.display = "block";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
    y[slideIndex-1].style.display = "block";
  }
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";
    z[slideIndex-1].style.display = "block";
  }
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("imagesProjets");
    var y = document.getElementsByClassName("infos");
    var z = document.getElementsByClassName("site");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
    for (i = 0; i < z.length; i++) {
      z[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    if (slideIndex > y.length) {slideIndex = 1}
    if (slideIndex > z.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    y[slideIndex-1].style.display = "block";
    z[slideIndex-1].style.display = "block";

    setTimeout(carousel, 6000);
}
