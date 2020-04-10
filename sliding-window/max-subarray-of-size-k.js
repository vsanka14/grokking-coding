// Problem Statement #
// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

function maxSubArray(k, arr) {
    let windowStart = 0, sum = 0, maxSum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
        if(i >= k-1) {
            if(sum > maxSum) maxSum = sum;
            sum -= arr[windowStart];
            windowStart++;
        }
    }
    console.log(maxSum);
    return maxSum;
}

maxSubArray(2, [2, 3, 4, 1, 5]);

//Time Complexity: 0(N)
//Space Complexity: 0(1)