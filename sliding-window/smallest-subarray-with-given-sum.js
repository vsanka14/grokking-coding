// Problem Statement #
// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

function smallestSubarrayWithGivenSum(arr, sum) {
    let flag = true;
    let windowSize = 1;
    for(let i=windowSize; i<=arr.length; i++) {
        let windowSum = 0, windowStart = 0;
        for(let j=0; j<arr.length; j++) {
            windowSum += arr[j];
            if(j >= i - 1) {
                if(windowSum >= sum) {
                    flag = false;
                    break;
                };
                windowSum -= arr[windowStart];
                windowStart++;
            }
        }
        if(!flag) {
            windowSize = i;
            break
        };
    }
    console.log(windowSize);
    return windowSize;
}

smallestSubarrayWithGivenSum([3, 4, 1, 1, 6], 7);


//Time Complexity: O(n^2)
//Space Complexity: 0(1)