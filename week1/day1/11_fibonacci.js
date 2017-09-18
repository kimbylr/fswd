// Write a function that expects an integer n and returns the first n numbers of the fibonacci series.
//
// Write an recursive approach for this problem.

function fib(n) {
  var result = [];
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n-2) + fib(n-1);
  }
}


function fibs(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push(fib(i));
  }
  return result;
}

console.log(fibs(3)); // => [0, 1, 1]
console.log(fibs(7)); // => [0, 1, 1, 2, 3, 5, 8]
console.log(fibs(1)); // => [0]
