let korea_hour = document.getElementById('korea_hour');
let korea_minute = document.getElementById('korea_minute');
let korea_second = document.getElementById('korea_second');
let korea_ampm = document.getElementById('korea_ampm');

let japan_hour = document.getElementById('japan_hour');
let japan_minute = document.getElementById('japan_minute');
let japan_second = document.getElementById('japan_second');
let japan_ampm = document.getElementById('japan_ampm');

let china_hour = document.getElementById('china_hour');
let china_minute = document.getElementById('china_minute');
let china_second = document.getElementById('china_second');
let china_ampm = document.getElementById('china_ampm');

let taiwan_hour = document.getElementById('taiwan_hour');
let taiwan_minute = document.getElementById('taiwan_minute');
let taiwan_second = document.getElementById('taiwan_second');
let taiwan_ampm = document.getElementById('taiwan_ampm');

let philippines_hour = document.getElementById('philippines_hour');
let philippines_minute = document.getElementById('philippines_minute');
let philippines_second = document.getElementById('philippines_second');
let philippines_ampm = document.getElementById('philippines_ampm');

let thailand_hour = document.getElementById('thailand_hour');
let thailand_minute = document.getElementById('thailand_minute');
let thailand_second = document.getElementById('thailand_second');
let thailand_ampm = document.getElementById('thailand_ampm');

let russia_hour = document.getElementById('russia_hour');
let russia_minute = document.getElementById('russia_minute');
let russia_second = document.getElementById('russia_second');
let russia_ampm = document.getElementById('russia_ampm');

let germany_hour = document.getElementById('germany_hour');
let germany_minute = document.getElementById('germany_minute');
let germany_second = document.getElementById('germany_second');
let germany_ampm = document.getElementById('germany_ampm');

let england_hour = document.getElementById('england_hour');
let england_minute = document.getElementById('england_minute');
let england_second = document.getElementById('england_second');
let england_ampm = document.getElementById('england_ampm');

let us_hour = document.getElementById('us_hour');
let us_minute = document.getElementById('us_minute');
let us_second = document.getElementById('us_second');
let us_ampm = document.getElementById('us_ampm');

let canada_hour = document.getElementById('canada_hour');
let canada_minute = document.getElementById('canada_minute');
let canada_second = document.getElementById('canada_second');
let canada_ampm = document.getElementById('canada_ampm');

let australia_hour = document.getElementById('australia_hour');
let australia_minute = document.getElementById('australia_minute');
let australia_second = document.getElementById('australia_second');
let australia_ampm = document.getElementById('australia_ampm');

var korea_offset = 0;
var japan_offset = 0;
var china_offset = -1;
var taiwan_offset = -1;
var philippines_offset = -1;
var thailand_offset = -2;
var russia_offset = -6;
var germany_offset = -7;
var england_offset = -8;
var us_offset = -13;
var canada_offset = -13;
var australia_offset = 1;

let korea_h, japan_h, china_h, taiwan_h, philippines_h, thailand_h, russia_h, germany_h, england_h, us_h, canada_h, australia_h;
function addZero(hour, offset) {
    return (hour + offset < 10 ? '0' + String(parseInt(hour) + parseInt(offset)) : String(hour + parseInt(offset)));
}
setInterval(() => {
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    korea_h = addZero(hours, korea_offset);
    china_h = addZero(hours, china_offset);
    taiwan_h = addZero(hours, taiwan_offset);
    japan_h = addZero(hours, japan_offset);
    philippines_h = addZero(hours, philippines_offset);
    thailand_h = addZero(hours, thailand_offset);
    russia_h = addZero(hours, russia_offset);
    germany_h = addZero(hours, germany_offset);
    england_h = addZero(hours, england_offset);
    us_h = addZero(hours, us_offset);
    canada_h = addZero(hours, canada_offset);
    australia_h = addZero(hours, australia_offset);




    korea_hour.innerHTML = korea_h;
    china_hour.innerHTML = china_h;
    taiwan_hour.innerHTML = taiwan_h;
    japan_hour.innerHTML = japan_h;
    philippines_hour.innerHTML = philippines_h;
    thailand_hour.innerHTML = thailand_h;
    russia_hour.innerHTML = russia_h;
    germany_hour.innerHTML = germany_h;
    england_hour.innerHTML = england_h;
    us_hour.innerHTML = us_h;
    canada_hour.innerHTML = canada_h;
    australia_hour.innerHTML = australia_h;

    korea_minute.innerHTML = minutes;
    japan_minute.innerHTML = minutes;
    china_minute.innerHTML = minutes;
    taiwan_minute.innerHTML = minutes;
    philippines_minute.innerHTML = minutes;
    thailand_minute.innerHTML = minutes;
    russia_minute.innerHTML = minutes;
    germany_minute.innerHTML = minutes;
    england_minute.innerHTML = minutes;
    us_minute.innerHTML = minutes;
    canada_minute.innerHTML = minutes;
    australia_minute.innerHTML = minutes;

    korea_second.innerHTML = seconds;
    japan_second.innerHTML = seconds;
    china_second.innerHTML = seconds;
    taiwan_second.innerHTML = seconds;
    philippines_second.innerHTML = seconds;
    thailand_second.innerHTML = seconds;
    russia_second.innerHTML = seconds;
    germany_second.innerHTML = seconds;
    england_second.innerHTML = seconds;
    us_second.innerHTML = seconds;
    canada_second.innerHTML = seconds;
    australia_second.innerHTML = seconds;
});