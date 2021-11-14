var item1 = document.querySelector(".item1");
var item2 = document.querySelector(".item2");
var item3 = document.querySelector(".item3");
var item4 = document.querySelector(".item4");
var item5 = document.querySelector(".item5");
var item6 = document.querySelector(".item6");
var item7 = document.querySelector(".item7");
var item8 = document.querySelector(".item8");
var item9 = document.querySelector(".item9");
var item10 = document.querySelector(".item10");
var item11 = document.querySelector(".item11");
var item12 = document.querySelector(".item12");
var item13 = document.querySelector(".item13");
var item14 = document.querySelector(".item14");
var item15 = document.querySelector(".item15");
var item16 = document.querySelector(".item16");

var color1 = document.getElementById("a");
var color2 = document.getElementById("b");
var color3 = document.getElementById("c");
var color4 = document.getElementById("d");

var paint;

color1.onclick = function () {
  paint = getComputedStyle(color1).background;
};

color2.onclick = function () {
  paint = getComputedStyle(color2).background;
};

color3.onclick = function () {
  paint = getComputedStyle(color3).background;
};

color4.onclick = function () {
  paint = getComputedStyle(color4).background;
};

item1.onclick = function () {
  item1.style.background = paint;
};

item2.onclick = function () {
  item2.style.background = paint;
};

item3.onclick = function () {
  item3.style.background = paint;
};

item4.onclick = function () {
  item4.style.background = paint;
};

item5.onclick = function () {
  item5.style.background = paint;
};

item6.onclick = function () {
  item6.style.background = paint;
};

item7.onclick = function () {
  item7.style.background = paint;
};

item8.onclick = function () {
  item8.style.background = paint;
};

item9.onclick = function () {
  item9.style.background = paint;
};

item10.onclick = function () {
  item10.style.background = paint;
};

item11.onclick = function () {
  item11.style.background = paint;
};

item12.onclick = function () {
  item12.style.background = paint;
};

item13.onclick = function () {
  item13.style.background = paint;
};

item14.onclick = function () {
  item14.style.background = paint;
};

item15.onclick = function () {
  item15.style.background = paint;
};

item16.onclick = function () {
  item16.style.background = paint;
};
