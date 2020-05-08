/**
 * Find missing words from 2 sentences
 * There are two strings, s and t, where t is a sub-sequence of s, 
 * report the words of s missing in t(case sensitive) in the order they are missing.

Constraints : Strings s and t consist of English letters, dash and spaces only. 
All words are delimited by space.

Example : If s =" I am using computer to improve my work" 
      and    t="am computer to improve", then the output of missing words should be 
      : "I using my work"


Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing

Python is an easy to learn powerful programming language
 */


 /**
  * 
  * @Alex I used a hash map and added 1 to the value of each key value pair. 
  * then itterated over the s string and checked to see if the value for that key was not 1. 
  * if it was 2 that means the word is in there 
  * more than once so i skip over it and subtract 1 from the value 
  * so it gets pushed in next time
  */
 //USE A HASHMAP
function missingWords(s, t){
    // split on the space to get an array
    //create a set from both arrays
    const sWords = s.split(" ");
    const tWords = t.split(" ")
    const returnArr = [];
    const tSet = new Set(tWords);
    for(let word of sWords){
      if(!tSet.has(word)){
        returnArr.push(word)
      }
    }
    return returnArr.join(" ");
  }
  
  console.log(missingWords("I am using computer to improve my work", "am computer to improve"))

  /**
   * Your Output (stdout)
It
has
efficient
high-level
data
structures
and
a
simple
but
effective
approach
objectoriented
elegant
syntax
and
dynamic
typing

********Expected Output

It
has
efficient
high-level
data
structures
and
a
simple
but
effective
approach
to
objectoriented
programming
Python
elegant
syntax
and
dynamic
typing
   */