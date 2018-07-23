
// here we declear the Promise

var somePromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('hey i got it');
    //reject('Unable to find it');
  },2500);
});

// here in the then there are two arrow function first for the resolve and second for the reject.
// if we call resolve function two or more time it not going to exectue bcz promise call the function only once .
somePromise.then((message)=>{
console.log(`success: ${message}`);
},(errorMsg)=>{
  console.log(`Error Occour: ${errorMsg}`);
});
