// check string anagram ("hello", "llohe") true

// step to flow

// 1. check the length of both string if not same return false
// 2. make key vale pair of first string
// 3 . check how many times that key present in that obj

// function checkAnagram(string1, string2) {
//   if (string1.length !== string2.length) return false;

//   let obj = {};

//   for (let letter of string1) {
//     obj[letter] = (obj[letter] || 0) + 1;
//   }

//   for (let items of string2) {
//     if (!obj[items]) return false;
//     obj[items] -= 1;
//   }

//   return true;

//   // console.log(obj)
// }

// let ans = checkAnagram("hello", "lloee");

// console.log(ans)


function checkAna(str1,str2){
    if(str1.length !== str2.length){
        return false
    }

    let obj={}

    for(let letter of str1){
     !obj[letter]?obj[letter]=1:obj[letter]++
    }
    // console.log(obj)

    for(let items of str2){
        if(!obj[items]) return false
        // console.log(obj)
        obj[items]--
    }
    return true
}


const ans = checkAna("hello","hlloo")
console.log(ans?"Anagram":"Not Anagram")