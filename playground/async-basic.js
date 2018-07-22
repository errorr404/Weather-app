console.log('starting app');

// setTimeout function expects two argument ,
//first:- the arrow function and second:- the time after time finises it fire the arrow funtion
setTimeout(() =>{
 console.log('inside the first callback');
},2000);


setTimeout(() =>{
 console.log('inside the second callback');
},0);


console.log('finishing app');
