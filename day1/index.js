"use strict";
exports.__esModule = true;
var data = require("./data.json");
// Sub uptimal solution, O(n^2)...
var findDoubleSum = function (nums) {
    var start = new Date();
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] + nums[j] === 2020) {
                console.log(new Date().getTime() - start.getTime());
                return nums[i] * nums[j];
            }
        }
    }
};
// Sub uptimal solution, O(n^3)... not a good look
var findTripletSum = function (nums) {
    var start = new Date();
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length - 1; k++) {
                if (nums[i] + nums[j] + nums[k] === 2020) {
                    console.log(new Date().getTime() - start.getTime());
                    return nums[i] * nums[j] * nums[k];
                }
            }
        }
    }
};
// This amounts to O(n log n), wow what an improvement!
var findBetterDoubleSum = function (nums) {
    var start = new Date();
    var sorted = nums.sort(function (a, b) { return a - b; });
    var l = 1;
    var r = sorted.length - 1;
    while (l < r) {
        if (sorted[l] + sorted[r] === 2020) {
            console.log(new Date().getTime() - start.getTime());
            return sorted[l] * sorted[r];
        }
        else if (sorted[l] + sorted[r] < 2020) {
            l++;
        }
        else if (sorted[l] + sorted[r] > 2020) {
            r--;
        }
    }
};
// And this brings us down to O(n^2), a whole order of magnitude smaller!
var findBetterTripletSum = function (nums) {
    var start = new Date();
    var sorted = nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < sorted.length - 2; i++) {
        var l = i + 1;
        var r = sorted.length - 1;
        while (l < r) {
            if (sorted[i] + sorted[l] + sorted[r] === 2020) {
                console.log(new Date().getTime() - start.getTime());
                return sorted[i] * sorted[l] * sorted[r];
            }
            else if (sorted[i] + sorted[l] + sorted[r] < 2020) {
                l++;
            }
            else if (sorted[i] + sorted[l] + sorted[r] > 2020) {
                r--;
            }
        }
    }
};
console.log('Double', findDoubleSum(data));
console.log('Triple', findTripletSum(data));
console.log('Double', findBetterDoubleSum(data));
console.log('Triple', findBetterTripletSum(data));
// Now I'm not amazing with algorithms, but this was fun. Let me know if you had a better way to do it!
