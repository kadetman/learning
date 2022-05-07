import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B1gBkopEBzk
function scheduleTasks(tasks: string[], k: number): string[] {
  const countByTask = new Map<string, number>();
  for (const task of tasks) {
    countByTask.set(task, (countByTask.get(task) ?? 0) + 1);
  }

  const maxHeap = new Heap(
    [...countByTask.keys()],
    null,
    (a, b) => countByTask.get(a) - countByTask.get(b)
  );
  const executionList: string[] = [];

  while (maxHeap.length) {
    const waitList: string[] = [];
    let n = k + 1;
    while (n && maxHeap.length) {
      const task = maxHeap.pop();
      const count = countByTask.get(task) - 1;
      countByTask.set(task, count);
      if (count > 0) waitList.push(task);
      executionList.push(task);
      n--;
    }

    for (const task of waitList) {
      maxHeap.push(task);
    }

    while (n) {
      executionList.push('idle');
    }
  }

  return executionList;
}

export function testSchedulingTasks() {
  log('Expected [], got: ', scheduleTasks([], 1));
  log(
    'Expected [a, c, b, a, c, idle, a], got: ',
    scheduleTasks(['a', 'a', 'a', 'b', 'c', 'c'], 2)
  );
  log(
    'Expected [a, b, idle, idle, a], got: ',
    scheduleTasks(['a', 'b', 'a'], 3)
  );
}
