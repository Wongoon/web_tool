let probability = document.getElementById('probability');
var pro = 75;
var first_i = 0;
var second_i = 0;
var third_i = 0;
const MAX_pro = 75;
const MIN_pro = 25;
probability.innerHTML = pro;
// color : #333;
let first = document.getElementById('first_add');
let second = document.getElementById('second_add');
let third = document.getElementById('minus');

let first_btn = document.getElementById('first_btn');
let second_btn = document.getElementById('second_btn');
let third_btn = document.getElementById('third_btn');

first_btn.addEventListener('click', function() {
    if(Math.random() < pro / 100){
        first[first_i].style.background = '#55f';
    }
});