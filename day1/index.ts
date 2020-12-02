import * as data from './data.json';

// Sub uptimal solution, O(n^2)...
const findDoubleSum = (nums: number[]) => {
  const start = new Date();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === 2020) {
        console.log(new Date().getTime() - start.getTime());
        return nums[i] * nums[j];
      }
    }
  }
}

// Sub uptimal solution, O(n^3)... not a good look
const findTripletSum = (nums: number[]) => {
  const start = new Date();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        if (nums[i] + nums[j] + nums[k] === 2020) {
          console.log(new Date().getTime() - start.getTime());
          return nums[i] * nums[j] * nums[k];
        }
      }
    }
  }
}

// This amounts to O(n log n), wow what an improvement!
const findBetterDoubleSum = (nums: number[]) => {
  const start = new Date();
  const sorted = nums.sort((a, b) => a-b);

    let l = 1;
    let r = sorted.length - 1;
    while (l < r) {
      if (sorted[l] + sorted[r] === 2020) {
        console.log(new Date().getTime() - start.getTime());
        return sorted[l] * sorted[r];
      } else if (sorted[l] + sorted[r] < 2020) {
        l++;
      } else if (sorted[l] + sorted[r] > 2020) {
        r--;
      }
  }
}

// And this brings us down to O(n^2), a whole order of magnitude smaller!
const findBetterTripletSum = (nums: number[]) => {
  const start = new Date();
  const sorted = nums.sort((a, b) => a-b);

  for (let i = 0; i < sorted.length - 2; i++) {
    let l = i + 1;
    let r = sorted.length - 1;
    while (l < r) {
      if (sorted[i] + sorted[l] + sorted[r] === 2020) {
        console.log(new Date().getTime() - start.getTime());
        return sorted[i] * sorted[l] * sorted[r];
      } else if (sorted[i] + sorted[l] + sorted[r] < 2020) {
        l++;
      } else if (sorted[i] + sorted[l] + sorted[r] > 2020) {
        r--;
      }
    }
  }
}
console.log('Double', findDoubleSum(data));
console.log('Triple', findTripletSum(data));
console.log('Double', findBetterDoubleSum(data));
console.log('Triple', findBetterTripletSum(data));

// Now I'm not amazing with algorithms, but this was fun. Let me know if you had a better way to do it!