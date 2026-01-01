export class JumpSearch {
  private sortedArray: number[];
  private length: number;
  private stepSize: number;

  constructor(sortedArray: number[]) {
    this.sortedArray = sortedArray;
    this.length = sortedArray.length;
    this.stepSize = Math.floor(Math.sqrt(this.length));
  }

  search(targetValue: number): number {
    let blockStart: number = 0;
    let blockEnd: number = 0;

    while (blockEnd < this.length) {
      blockStart = blockEnd;
      blockEnd += this.stepSize;

      if (blockEnd > this.length) {
        blockEnd = this.length;
      }

      if (this.sortedArray[blockEnd - 1] >= targetValue) {
        break;
      }
    }

    for (let index: number = blockStart; index < blockEnd; index++) {
      if (this.sortedArray[index] === targetValue) {
        return index;
      }
    }

    return -1;
  }
}
