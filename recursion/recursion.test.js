/* Write a function to do the division operation without using the built-in division*/

let negResult;
function division(number, dividedBy) {
  if (number == 0) {
    return 0;
  }
  if (dividedBy == 0) {
    return Number.MAX_VALUE;;
    let negResult = false;
  }

  if (number < 0) {
    number = -number;
    if (dividedBy < 0) {
      dividedBy = -dividedBy;
    }
    else {
      negResult = true;
    }
  }
  else if (dividedBy < 0) {
    dividedBy = -dividedBy;
    negResult = true;
  }


  let quotient = 0;
  while (number >= dividedBy) {
    number = number - dividedBy;
    quotient++;
  }


  if (negResult)
    quotient = -quotient;
  return quotient;
} 







/* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/

function pow(x, n) {
    if (n == 1) {
        return x;
    } else if (n == 0) {
        return 1;
    } else {
        return x * pow(x, n - 1);
    }

}

// Write a function that take n as parameter and return the nth element in the Fibonacci Series


function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
