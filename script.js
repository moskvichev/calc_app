'use strict';

console.log('js code added');
window.onload = nowTime();

function nowTime() {
  let date = new Date().toLocaleDateString();
  let watch = new Date();
  let hours = watch.getHours().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }
  let minutes = watch.getMinutes().toString();
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  let seconds = watch.getSeconds().toString();
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  let daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  let days = watch.getDay();
  let day = daysOfWeek[days];

  let monthes = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  let monthesMassive = watch.getMonth();
  let month = monthes[monthesMassive];
  // проверка месяца с помощью switch
  // switch (monthesMassive) {
  //   case 0:
  //     month = monthes[0];
  //     break;
  //   case 1:
  //     month = monthes[1];
  //     break;
  //   case 2:
  //     month = monthes[2];
  //     break;
  //   case 3:
  //     month = monthes[3];
  //     break;
  //   case 4:
  //     month = monthes[4];
  //     break;
  //   case 5:
  //     month = monthes[5];
  //     break;
  //   case 6:
  //     month = monthes[6];
  //     break;
  //   case 7:
  //     month = monthes[7];
  //     break;
  //   case 8:
  //     month = monthes[8];
  //     break;
  //   case 9:
  //     month = monthes[9];
  //     break;
  //   case 10:
  //     month = monthes[10];
  //     break;
  //   case 11:
  //     month = monthes[11];
  //     break;
  // }

  //проверка месяца циклом for

  // for (monthes = 0; monthes <= monthesMassive; monthes++) {
  //   if (monthes == monthesMassive) {
  //     console.log(monthes);
  //   }
  // }
  // let month = () => {
  //   for (month = 0; month <= monthesMassive; month++) {
  //     if (month == monthesMassive) {
  //       month = monthes[month];
  //       console.log(month);
  //     }
  //   }
  // };

  // month();
  // проверка месяца if / else
  // if (monthesMassive == 0) {
  //   month = monthes[0];
  // } else if (monthesMassive == 1) {
  //   month = monthes[1];
  // } else if (monthesMassive == 2) {
  //   month = monthes[2];
  // } else if (monthesMassive == 3) {
  //   month = monthes[3];
  // } else if (monthesMassive == 4) {
  //   month = monthes[4];
  // } else if (monthesMassive == 5) {
  //   month = monthes[5];
  // } else if (monthesMassive == 6) {
  //   month = monthes[6];
  // } else if (monthesMassive == 7) {
  //   month = monthes[7];
  // } else if (monthesMassive == 8) {
  //   month = monthes[8];
  // } else if (monthesMassive == 9) {
  //   month = monthes[9];
  // } else if (monthesMassive == 10) {
  //   month = monthes[10];
  // } else {
  //   month = monthes[11];
  // }

  let fullTime =
    day + '<br/>' + month + '<br/>' + ' ' + date + '<br/>' + hours + ':' + minutes + ':' + seconds;

  let timeBlock = document.querySelector('.time_block');
  timeBlock.innerHTML = fullTime;

  setTimeout('nowTime()', 1000);
}

let a = '';
let b = '';

let sing = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//экран

const out = document.querySelector('.calc-screen p');

function clearAll() {
  a = '';
  b = '';
  sing = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;
  out.textContent = '';
  const key = event.target.textContent;
  if (digit.includes(key)) {
    a += key;
    console.log(a, b, sing);
    out.textContent = a;
  }
};
