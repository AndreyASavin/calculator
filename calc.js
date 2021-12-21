'use strict';

let output =[];

const inputDisp = document.querySelector('#history');
const outputtDisp = document.querySelector('#result');

const allClear = document.querySelector('#allclear');
const backspace = document.querySelector('#backspace');
const percent = document.querySelector('#percent');

const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const plus= document.querySelector('#plus');
const equals = document.querySelector('#equals');

const seven = document.querySelector('#sev');
const eight = document.querySelector('#eig');
const nine = document.querySelector('#nin');
const four = document.querySelector('#fou');
const five = document.querySelector('#fiv');
const six = document.querySelector('#six');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#thr');
const zero = document.querySelector('#zer');

// Очистка
allClear.addEventListener('click', function(){
    output=[0];
    outputtDisp.value=output.join('');
})
backspace.addEventListener('click', function(){
    if (output.length==1) {
        output=[0];
    } else {
    output.pop();}
    outputtDisp.value=output.join('');
})

// Цифры
nine.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(9);
    } else {
    output.push(9);}
    outputtDisp.value=output.join('');
})
eight.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(8);
    } else {
    output.push(8);}
    outputtDisp.value=output.join('');
})
seven.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(7);
    } else {
    output.push(7);}
    outputtDisp.value=output.join('');
})
six.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(6);
    } else {
    output.push(6);}
    outputtDisp.value=output.join('');
})
five.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(5);
    } else {
    output.push(5);}
    outputtDisp.value=output.join('');
})
four.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(4);
    } else {
    output.push(4);}
    outputtDisp.value=output.join('');
})
three.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(3);
    } else {
    output.push(3);}
    outputtDisp.value=output.join('');
})
two.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(2);
    } else {
    output.push(2);}
    outputtDisp.value=output.join('');
})
one.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(1);
    } else {
    output.push(1);}
    outputtDisp.value=output.join('');
})
zero.addEventListener('click', function(){
    if (output.length==1 && output[0]==0){
        output.length=0;
        output.push(0);
    } else {
    output.push(0);}
    outputtDisp.value=output.join('');
})

// Операторы
plus.addEventListener('click', function(){
    if (typeof output[output.length-1] !== 'number'){
        output[output.length-1]='+';
    } else {output.push('+');}
    outputtDisp.value=output.join('');
})
minus.addEventListener('click', function(){
    if (typeof output[output.length-1] !== 'number'){
        output[output.length-1]='-';
    } else {output.push('-');}
    outputtDisp.value=output.join('');
})
multiply.addEventListener('click', function(){
    if (typeof output[output.length-1] !== 'number'){
        output[output.length-1]='*';
    } else {output.push('*');}
    outputtDisp.value=output.join('');
})
divide.addEventListener('click', function(){
    if (typeof output[output.length-1] !== 'number'){
        output[output.length-1]='/';
    } else {output.push('/');}
    outputtDisp.value=output.join('');
})

// Равенство
equals.addEventListener('click', function(){
    inputDisp.value=eval(outputtDisp.value);
})
