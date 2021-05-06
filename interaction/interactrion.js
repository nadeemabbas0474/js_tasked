
alert(`hello bro`);
let name = prompt('plz enter your name')
let age = prompt("how old are you:" , 32);
alert(`you are ${age} years old!`);
confirm(`are you ${age} years old ${name}`);
let detail = alert(`${name} ,you are ${age} years old. you were bron in ${2021 - age}`);
let days = age*360;
confirm(`you are roughly ${days} days`);

// ===============creating calculator ===============
alert("i am going to create the simple calculator")
let num1 = Number(prompt("enter the number in num1"));
let num2 = Number(prompt("enter 2nd numbers in num2"));
alert(num1 + num2);
confirm(`the addition of num1 and num2 is ${num1+num2}`);
alert(`the multiplication of num1 and num2 is ${num1*num2}`);
alert(`the subtracton of num1 and num2 is ${num1-num2}`);
alert(`the division of num1 and num2 is ${num1/num2}`);
confirm(`is this calculator working correct`);
prompt("give some suggisition",'plz');

