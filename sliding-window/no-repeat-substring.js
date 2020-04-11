// Problem Statement #
// Given a string, find the length of the longest substring which has no repeating characters.

function noRepeatSubstring(str) {
    let windowStart = 0, maxLen = 0, letterMap = {};
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if(letterMap[str[windowEnd]]) {
            windowStart = Math.max(windowStart, letterMap[str[windowEnd]]+1);
        }
        letterMap[str[windowEnd]] = windowEnd;
        maxLen = Math.max(maxLen, (windowEnd - windowStart) + 1);
    }
    console.log(maxLen);
    return maxLen;
}

// Time Complexity O(N)
// Space Complexity O(N)

// function calcWindowSize(letterMap) {
//     let windowSize = 0;
//     Object.values(letterMap).forEach(value=>windowSize+=value);
//     return windowSize;
// }

// function noRepeatSubstring(str) {
//     let windowStart = 0, maxLen = 0, letterMap = {};
//     for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//         if(!letterMap[str[windowEnd]]) letterMap[str[windowEnd]] = 0;
//         letterMap[str[windowEnd]] += 1;
//         while(calcWindowSize(letterMap) !== Object.keys(letterMap).length) {
//             letterMap[str[windowStart]] -= 1;
//             if(letterMap[str[windowStart]] === 0) delete letterMap[str[windowStart]];
//             windowStart++;
//         }
//         if(maxLen < (windowEnd-windowStart)+1) {
//             longestSubstr = Object.keys(letterMap).join('');
//             maxLen = (windowEnd-windowStart)+1
//         }
//     }
//     console.log(longestSubstr);
//     return maxLen;
// }

//Time Complexity O(N^2)
//Space Complexity O(N)

noRepeatSubstring('abcd');

