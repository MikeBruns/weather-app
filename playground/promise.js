var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be nubmers');
      }
    }, 1500);
  });
};

asyncAdd(1, 2)
//resovle
.then((result) => {
  console.log('Result:', result);
  return asyncAdd(result, 33);
//reject
}, (errorMessage) => {
  console.log(errorMessage);
})
//Promise once the previous promise finishes
//resolve
.then((result) => {
  console.log('Second promise:', result);
//reject
}, (errorMessage) => {
  console.log(errorMessage);
});


///////////////////////////////////////////////////////////////


var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey. It worked!');
    // reject('Unable to fulfill promise');
  }, 2500);
});

//only gets called if the promise is fulfilled, aka: no errors
somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
