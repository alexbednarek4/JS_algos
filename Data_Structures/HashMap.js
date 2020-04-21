/**
 *! Hashing
 *  In order to look up values by key, we need a way to convert keys to valid array indeces
 */
//? What makes a good hashing function?
//? Fast (i.e. constant time)
//? Doesn't cluster or bottleneck outputs at specific indices, rather it distributes uniformly
//? Deterministic: Same input always yields same output

// Hash function that works on strings ONlY
// With this code, we must use a prime number array length

//! Dealing with Collisions
//? Separate Chaining: At each index in the array, we store values in another complex data structure like array or LL
// this allows us to store multiple key value pairs at the same index
//? Linear Probing: Search through the array to find next empty spot
// unlike with separate chaining, this allows us to store single key value pairs at each index

class HashMap {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    // if the string length is greater than 100, here we are only taking the first 100 characters
    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      // map 'a' to 1, 'b' to 2, 'c' to 3, etc
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    // if there is nothing at this index
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    const index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i += 1) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }

  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
        if(this.keyMap[i]){
            for(let j = 0; j<this.keyMap[i].length; j+=1){
                if(!valuesArr.includes(this.keyMap[i][j][1])){
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
    }
    return valuesArr;
  }
  keys() {
    const keysArr = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
        if(this.keyMap[i]){
            for(let j = 0; j<this.keyMap[i].length; j+=1){
                if(!keysArr.includes(this.keyMap[i][j][0])){
                    keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
    }
    return keysArr;
  }
}
// const newMap = new HashMap();
// console.log(newMap.keys());
