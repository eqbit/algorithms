const inputArray = [3, 7, 1, 8, 4, 6, 5, 2, 0, 9, 10, 123, -2, 233, 2, 233, 21, 7, -45, 56, 2, 5, 8, 1];

class Heap {
  constructor(inputArray) {
    this.inputArray = inputArray;
  
    for (let i = Math.floor(this.inputArray.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }
  
  swap(index1, index2) {
    const temp = inputArray[index1];
    this.inputArray[index1] = this.inputArray[index2];
    this.inputArray[index2] = temp;
  }
  
  heapify(rootIndex, length = this.inputArray.length, array = this.inputArray) {
    const leftIndex = rootIndex * 2 + 1;
    const rightIndex = rootIndex * 2 + 2;
    let largestIndex = rootIndex;
  
    if (leftIndex < length && array[leftIndex] > array[largestIndex]) {
      largestIndex = leftIndex;
    }
  
    if (rightIndex < length && array[rightIndex] > array[largestIndex]) {
      largestIndex = rightIndex;
    }
  
    if (rootIndex !== largestIndex) {
      this.swap(rootIndex, largestIndex);
      this.heapify(largestIndex, length, array);
    }
  }
  
  sort() {
    for (let i = this.inputArray.length - 1; i > 0; i--) {
      this.swap(i, 0);
      this.heapify(0, i);
    }
    
    return this.inputArray;
  }
}

const heap = new Heap(inputArray);
console.log(heap.sort());
