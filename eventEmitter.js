const Event = require('events');

class MyEventEmitter extends Event {}
const myEmitter = new MyEventEmitter();

myEmitter.on('abc',  (data) => {
    console.log('event occurred!!!!', data);
  });
  myEmitter.emit('abc', 'ananya');

const timeoutObj = setTimeout(() => {
    console.log('ananya');
  }, 1000);

const interval = setInterval(() => {
    console.log('verma');
  }, 2000);

console.log(timeoutObj)
console.log(interval)

