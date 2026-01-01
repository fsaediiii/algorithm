class StackAlgorithms {
  public nextGreaterElement(arr: number[]): number[] {
    const result: number[] = [];

    arr.forEach((item, index) => {
      let found = -1;
      for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] > item) {
          found = arr[i];
          break;
        }
      }
      result.push(found);
    });

    return result;
  }

  public v;
}
