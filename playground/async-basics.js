console.log('starting app');

//setTimeout is a node function
setTimeout(() => {
  console.log('inside of callback');
}, 2000);

setTimeout(() => {
  console.log('inside second callback');
}, 0);

console.log('finishing up');
