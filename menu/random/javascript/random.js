var min = document.querySelector('#min');
var max = document.querySelector('#max');
var random = document.querySelector('.button');
var number = document.querySelector('.number');
var random_number = 0;

random.addEventListener('click', e => {
    random_number = Math.floor(Math.random() * (Math.floor(max.value) - Math.floor(min.value) + 1) + min.value);
    
    if(random_number >=  0 && random_number < 10){
        number.innerText = "000000" + random_number;
    }
    else if(random_number >=  10 && random_number < 100){
        number.innerText = "00000" + random_number;
    }
    else if(random_number >=  100 && random_number < 1000){
        number.innerText = "0000" + random_number;
    }
    else if(random_number >=  1000 && random_number < 10000){
        number.innerText = "000" + random_number;
    }
    else if(random_number >=  10000 && random_number < 100000){
        number.innerText = "00" + random_number;
    }
    else if(random_number >=  100000 && random_number < 1000000){
        number.innerText = "0" + random_number;
    }
    else if(random_number == 1000000){
        number.innerText = random_number;
    }
})

function input_max(){
    if(Math.floor(max.value) > 1000000){
        max.value = 1000000;
    }
}

function input_min(){
    if(Math.floor(min.value) < 0){
        min.value = 0;
    }
}