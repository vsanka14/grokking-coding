// Problem Statement #
// Given a string, find the length of the longest substring in it with no more than K distinct characters.

function longestSubstrKDistinctChars(str, k) {
    let arr = str.split('');
    let letterMap = {}, windowStart = 0, longestSubstrLen = 0;
    for(let i=0; i<arr.length; i++) {
        if(!letterMap[arr[i]]) letterMap[arr[i]] = 0;
        letterMap[arr[i]] += 1;
        while (Object.keys(letterMap).length > k) {
            letterMap[arr[windowStart]] -= 1;
            if(letterMap[arr[windowStart]]===0) delete letterMap[arr[windowStart]];
            windowStart++;
        }
        longestSubstrLen = Math.max(longestSubstrLen, (i-windowStart)+1);
    }
    console.log(longestSubstrLen);
    return longestSubstrLen;
}


longestSubstrKDistinctChars('araaci', 2);