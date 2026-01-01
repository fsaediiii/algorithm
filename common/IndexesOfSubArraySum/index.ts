export default class IndexesOfSubArraySum {
  subarraySum(arr: number[], target: number): number[] {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return [i + 1, i + 1];
    }

    let start = 0;
    let sum = 0;
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end];
      while (sum > target && start <= end) {
        sum -= arr[start];
        start++;
      }
      if (sum === target) return [start + 1, end + 1];
    }

    return [-1];
  }
}
