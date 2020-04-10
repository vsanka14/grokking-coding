// Problem Statement #
// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

function smallestSubarrayWithGivenSum(arr, sum) {
    let windowStart = 0, minWindowSize = Infinity, windowSum = 0;
    for(let i=0; i<arr.length; i++) {
        windowSum += arr[i];
        while(windowSum >= sum) {
            minWindowSize = Math.min(minWindowSize, (i-windowStart)+1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    console.log(minWindowSize);
    return minWindowSize;
}

// Time Complexity O(N+N) = O(N)
// Space Complexity 0(1)

// function smallestSubarrayWithGivenSum(arr, sum) {
//     let flag = true;
//     let windowSize = 1;
//     for(let i=windowSize; i<=arr.length; i++) {
//         let windowSum = 0, windowStart = 0;
//         for(let j=0; j<arr.length; j++) {
//             windowSum += arr[j];
//             if(j >= i - 1) {
//                 if(windowSum >= sum) {
//                     flag = false;
//                     break;
//                 };
//                 windowSum -= arr[windowStart];
//                 windowStart++;
//             }
//         }
//         if(!flag) {
//             windowSize = i;
//             break
//         };
//     }
//     console.log(windowSize);
//     return windowSize;
// }

//Time Complexity: O(n^2)
//Space Complexity: 0(1)

smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7);
smallestSubarrayWithGivenSum([2, 1, 5, 2, 8], 7);
smallestSubarrayWithGivenSum([3, 4, 1, 1, 6], 8);
