/**
 * Write a funciton that determines if a given string is a palindrome
 */

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    console.log(str);
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
}
console.log(isPalindrome('amanaplanacanalpanama'))