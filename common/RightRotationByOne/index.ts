export default class RightRotationByOne {
  rotateUsingTemp(arr: number[]): number[] {
    let lastElement: number = arr[arr.length - 1];
    for (let i: number = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
    return arr;
  }

  rotateUsingPopUnshift(arr: number[]): number[] {
    arr.unshift(arr.pop()!);
    return arr;
  }
}
