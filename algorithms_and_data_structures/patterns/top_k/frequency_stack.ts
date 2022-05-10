import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R8o6vV83DLY
class Element {
  constructor(
    readonly num: number,
    readonly frequency: number,
    readonly index: number
  ) {}

  compare(el: Element): number {
    const diff = this.frequency - el.frequency;
    return diff === 0 ? this.index - el.index : diff;
  }
}

class FrequencyStack {
  private readonly maxHeap = new Heap([], null, (a, b) => a.compare(b));
  private readonly frequencyMap = new Map<number, number>();
  private nextIndex = 0;

  push(num: number) {
    this.frequencyMap.set(num, (this.frequencyMap.get(num) ?? 0) + 1);
    this.maxHeap.push(
      new Element(num, this.frequencyMap.get(num), this.nextIndex++)
    );
  }

  pop(): number {
    const topEl = this.maxHeap.pop();
    this.frequencyMap.set(topEl.num, topEl.frequency - 1);

    return topEl.num;
  }
}

export function testFrequencyStack() {
  const frequencyStack = new FrequencyStack();
  frequencyStack.push(1);
  frequencyStack.push(2);
  frequencyStack.push(3);
  frequencyStack.push(2);
  frequencyStack.push(1);
  frequencyStack.push(2);
  frequencyStack.push(5);
  log('Expected 2, got: ', frequencyStack.pop());
  log('Expected 1, got: ', frequencyStack.pop());
  log('Expected 2, got: ', frequencyStack.pop());
}
