// js dom project

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const btn4 = document.createElement('button');
const btn5 = document.createElement('button');
const btn6 = document.createElement('button');
const btn7 = document.createElement('button');
const btn8 = document.createElement('button');

const display = document.querySelector('#bdy');
display.append(btn1);
display.append(btn2);
display.append(btn3);
display.append(btn4);
display.append(btn5);
display.append(btn6);
display.append(btn7);
display.append(btn8);


btn1.style.background = '#70a1ff';
btn2.style.background = '#7bed9f';
btn3.style.background = '#ff6348';
btn4.style.background = '#eccc68';
btn5.style.background = '#009432';
btn6.style.background = '#D980FA';
btn7.style.background = '#C4E538';
btn8.style.background = '#B53471';

btn1.onclick = function () {
    document.getElementById('bdy').style.background = '#70a1ff';
}
btn2.onclick = function () {
    document.getElementById('bdy').style.background = '#7bed9f';
}
btn3.onclick = function () {
    document.getElementById('bdy').style.background = '#ff6348';
}
btn4.onclick = function () {
    document.getElementById('bdy').style.background = '#eccc68';
}
btn5.onclick = function () {
    document.getElementById('bdy').style.background = '#009432';
}
btn6.onclick = function () {
    document.getElementById('bdy').style.background = '#D980FA';
}
btn7.onclick = function () {
    document.getElementById('bdy').style.background = '#C4E538';
}
btn8.onclick = function () {
    document.getElementById('bdy').style.background = '#B53471';
}