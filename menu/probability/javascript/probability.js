let probability = document.getElementById('probability');
var pro = 75;

var first_i = 0;
var second_i = 0;
var third_i = 0;

var first_ct = 0;
var second_ct = 0;
var third_ct = 0;

const MAX_pro = 75;
const MIN_pro = 25;

let first = document.getElementById('first_add');
let second = document.getElementById('second_add');
let third = document.getElementById('minus');

let first_count = document.getElementById('first_count');
let second_count = document.getElementById('second_count');
let third_count = document.getElementById('minus_count');

let first_btn = document.getElementById('first_btn');
let second_btn = document.getElementById('second_btn');
let third_btn = document.getElementById('third_btn');
let reset_btn = document.getElementById('reset');

probability.innerHTML = pro;
first_count.innerHTML = first_ct;
second_count.innerHTML = second_ct;
third_count.innerHTML = third_ct;

first_btn.addEventListener('click', function() {
    if (first_i <= 9){
        if(parseInt(Math.random() * 100) < pro){
            first.children[first_i].style.background = '#55f';
            pro = (MIN_pro >= pro) ? MIN_pro : pro - 10;
            first_ct++;
        }
        else{
            first.children[first_i].style.borderColor = '#333';
            pro = (MAX_pro <= pro) ? MAX_pro : pro + 10;
        }
        probability.innerHTML = pro;
        first_count.innerHTML = first_ct;
        first_i++;
    }
});

second_btn.addEventListener('click', function() {
    if (second_i <= 9){
        if(parseInt(Math.random() * 100) < pro){
            second.children[second_i].style.background = '#55f';
            pro = (MIN_pro >= pro) ? MIN_pro : pro - 10;
            second_ct++;
        }
        else{
            second.children[second_i].style.borderColor = '#333';
            pro = (MAX_pro <= pro) ? MAX_pro : pro + 10;
        }
        probability.innerHTML = pro;
        second_count.innerHTML = second_ct;
        second_i++;
    }
});

third_btn.addEventListener('click', function() {
    if (third_i <= 9){
        if(parseInt(Math.random() * 100) < pro){
            third.children[third_i].style.background = '#f55';
            pro = (MIN_pro >= pro) ? MIN_pro : pro - 10;
            third_ct++;
            if (third_ct >= 5){
                third_count.style.Color = '#f55';
            }
        }
        else{
            third.children[third_i].style.borderColor = '#333';
            pro = (MAX_pro <= pro) ? MAX_pro : pro + 10;
        }
        probability.innerHTML = pro;
        third_count.innerHTML = third_ct;
        third_i++;
    }
});

reset_btn.addEventListener('click', function() {
    for (var i = 0; i < 10; i++){
        first.children[i].style.background = 'none';
        first.children[i].style.borderColor = '#55f';
        second.children[i].style.background = 'none';
        second.children[i].style.borderColor = '#55f';
        third.children[i].style.background = 'none';
        third.children[i].style.borderColor = '#f55';
    }
    pro = 75;
    first_i = 0;
    second_i = 0;
    third_i = 0;

    first_ct = 0;
    second_ct = 0;
    third_ct = 0;

    probability.innerHTML = pro;
    first_count.innerHTML = first_ct;
    second_count.innerHTML = second_ct;
    third_count.innerHTML = third_ct;
});