//? create hashmap using javascript built in Map
class HashMap {
    constructor(){
        this.size = 20;
        this.buckets = new Array(this.size)
        for(let i = 0; i<this.buckets.length; i+=1){
            this.buckets[i] = new Map();
        }
    }
    hash(key, size){
        let hashedKey = 0;
        for(let i = 0; i<key.length; i+=1){
            hashedKey = key.charCodeAt(i);
        }
        return hashedKey % size;
    }

    insert(key, value){
        let idx = this.hash(key, this.size);
        this.buckets[idx].set(key, value)
    }
    remove(){
        let idx = this.hash(key, this.size);
        let deleted = this.buckets[idx].get(key);
        this.buckets[idx].delete(key);
        return deleted;
    }
    search(key){
        let idx = this.hash(key, this.size);
        return this.buckets[idx].get(key);
    }
}
const map = new HashMap();
map.insert('Serena', 'Moon');
map.insert('Amy', 'Mercury');
map.insert('Ray', 'Mars');
map.insert('Leta', 'Jupiter');
map.insert('Nina', 'Venus');
map.insert('Darien', 'Maskman');
console.log(map);
console.log(map.search('Ray'));

