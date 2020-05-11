function naiveSearch(str1, str2){
    let count = 0;
    for(let i = 0; i<str1.length; i += 1) {
        for(let j = 0; j<str2.length; j += 1) {
            console.log(str1[i], str2[j]);
            if(str2[j] !== str1[i+j]) break;
            if(j === str2.length-1){
                count+=1;
            }
        }
    }
    return count;
}
console.log(naiveSearch('lorie loledlol', 'lol'));