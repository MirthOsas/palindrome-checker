const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


function palindromeChecker() {
  const inputVal = document.querySelector('.input-text').value;
  let len = inputVal.length;
  console.log(len);
  let start = inputVal.substring(0, Math.floor(len/2)).toLowerCase();
  let end = inputVal.substring(len - Math.floor(len/2)).toLowerCase();
  let flip = end.split('').reverse().join('');
  console.log(flip);

  if (start === flip) {
    result.innerHTML = `${inputVal.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${inputVal.toUpperCase()} is NOT a palindrome`
  }
}

btn.addEventListener('click', palindromeChecker)