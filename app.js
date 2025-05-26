'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if(memo.has(n)){
    return memo.get(n);
  }
  // データを持っていない時
  const value = fib(n-1) + fib(n-2);
  memo.set(n, value);
  return value;
}

const length = 100;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}



// function fib(n) {
//   if(n === 0) {
//     //  0番目は 0 を返すルール
//     return 0;
//   } else if(n === 1) {
//     //  1番目は 1 を返すルール
//     return 1;
//   }
//   return fib(n-1) + fib(n-2);
// }

// const length = 40;
// for (let i = 0; i <= length; i++) {
//   console.log(fib(i));
// }

