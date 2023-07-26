function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null; // If no pair with the target sum is found
  }
  
  // Example usage:
  const sortedArray = [1, 5, 3, 6, 8, 11, 15];
  const targetValue = 9;
  console.log(findTwoNumbersWithSum(sortedArray, targetValue)); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
  