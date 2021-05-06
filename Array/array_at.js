let furits = ['banana','apple','pear','mango'];
let nmbrs = [3,4,7,2,9,6,5,8];
let asad = [1,3,5,7,9,11];
let numbers = [49,46,44,6,76,23,4,6,7,11,12,14,15,434,5213,3321,['gh','re','df']];
let Array =['n','a','d','e','e','m']
let animals =['cow','dog','cat','donkey','ox','sheep','cat','goat'];;
// concat ==============
// console.log(animals.concat(numbers));
// copywithin ==============
// console.log(animals);
// console.log(animals.copyWithin(3,5,6));
// console.log(numbers.copyWithin(2,4,5));
// entires
// const itr = animals.entries();
// console.log(itr.next().value);
// console.log(itr.next().value);
// console.log(itr.next().value);

// every
// const isBelow =(currentValue) => currentValue < 77;
// console.log(numbers.every(isBelow));

// fill

// console.log(numbers.fill(8,4,5));
// console.log(animals.filter(word => word.length !=3));

// find========================
// console.log(numbers.find(element => element > 45));
// console.log(numbers.find(element => element < 45));

// findindex=======================
// console.log(numbers.findIndex(element => element < 6));
// console.log(numbers.findIndex(element => element > 76));

// flat=======
// console.log(numbers.flat());

// foreach=======
// numbers.forEach(element => console.log(element));
// animals.forEach(element => console.log(element));

// console.log(Array.from('nadeem'));
// from  creating array from strings=======================
// console.log(Array.from("ABCDEFG"));

// includes==============
// console.log(animals.includes('hen'));
// console.log(numbers.includes(15));

// indexof========
// console.log(animals.indexOf('cat', 2));
// differences of findindex and indexof
// console.log(numbers.findIndex(element => element > 11));
// console.log(numbers.indexOf(434));

// isArray======================================
// console.log(Array.isArray(['footer','gasd']));
// Array.isArray('foobar');

// joins=============================
// console.log(animals.join());
// console.log(animals.join('+'));
// console.log(animals.join(''));

// keys====================
// let dns = Object.keys(animals);
// console.log(dns);

// console.log(animals.lastIndexOf('donkey',2));
// console.log(animals.lastIndexOf('donkey',3));
// console.log(animals.lastIndexOf('cat'));


// map======================
// perform what ever you wants one no in all elements of Array
// console.log(nmbrs.map(x => x * 3));
// console.log(nmbrs.map(x => x + 3));

// Array.of========================
// console.log(Array.of(2,3,4));

// pop==================================
// removeing of last elemnet from Array=====================
// console.log(animals.pop());
// console.log(animals);

// shift============= remove first element from array
// console.log(animals.shift());
// console.log(animals);

// push============================ adding of one or more elements in the last of Array
// animals.push('blackcow');
// console.log(animals);
// animals.push('hen','befailo','yaks')
// console.log(animals);
// nmbrs.push(11,12,14,15);
// console.log(nmbrs);

// unshift============ adding of one or more elements at the beginning of Array
// nmbrs.unshift(100,'nas');
// console.log(nmbrs);

// toString============== converting in strings
// console.log(nmbrs.toString());

// splice===== adding and removing element from Array
// animals.splice(2,0,'butterfuly');
// console.log(animals);
// add butterfully in 6
// animals.splice(6,1,'butterfuly');
// console.log(animals);
// add butterfully in 2 and removing from 3,4
// animals.splice(2,4,'butterfuly');
// console.log(animals);
// animals.splice(4,0,'thgur');
// console.log(animals);

// reduce==================================
// let nms = (accumulator, currentValue) => accumulator + currentValue;
// console.log(nmbrs.reduce(nms));
// console.log(nmbrs.reduce(nms,4));

// reverse=======================
// const rev = nmbrs.reverse();
// console.log('revers:',rev);
// console.log(('revers'),nmbrs.reverse());

// Array.of==============
// console.log(Array.of(3,4,7,2,9,6,5,8));

// some=============
// const even = (element) => element % 2 === 0;
// console.log(asad.some(even));
// console.log(nmbrs.some((element) => element % 2 === 0));

// slices========show
// console.log(nmbrs.slice(4));
// console.log(nmbrs.slice(2,5));
// keys =========================
// console.log(Object.keys(furits));