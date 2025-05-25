'use strict';
function fib(n) {
  if(n === 0) {
    //  0番目は 0 を返すルール
    return 0;
  } else if(n === 1) {
    //  1番目は 1 を返すルール
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}