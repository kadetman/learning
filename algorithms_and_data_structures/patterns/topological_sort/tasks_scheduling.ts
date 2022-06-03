import { log } from '../../linked_list/utils';

import Deque from 'collections/deque';

// https://www.educative.io/courses/grokking-the-coding-interview/gxJrM9goEMr
function canScheduleTasks(
  tasksCount: number,
  prerequisites: Array<[number, number]>
): boolean {
  if (!tasksCount || !prerequisites.length) return false;

  const depsCounts: number[] = Array(tasksCount).fill(0);
  const childrenTasks: Array<number[]> = Array(tasksCount)
    .fill(null)
    .map(() => []);

  for (const [parent, child] of prerequisites) {
    depsCounts[child]++;
    childrenTasks[parent].push(child);
  }

  const sources = new Deque();
  for (let i = 0; i < tasksCount; i++) {
    if (depsCounts[i] === 0) sources.push(i);
  }

  const scheduledTasks: number[] = [];
  while (sources.length) {
    const task = sources.shift();
    scheduledTasks.push(task);

    for (const child of childrenTasks[task]) {
      depsCounts[child]--;
      if (depsCounts[child] === 0) sources.push(child);
    }
  }

  log('scheduled tasks: ', scheduledTasks);

  return scheduledTasks.length === tasksCount;
}

export function testTasksScheduling() {
  log('Expected false, got: ', canScheduleTasks(0, []));
  log('Expected true, got: ', canScheduleTasks(3, [
    [0, 1],
    [1, 2],
  ]));
  log('Expected false, got: ', canScheduleTasks(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]));
  log('Expected true, got: ', canScheduleTasks(6, [
    [2, 5],
    [0, 5], 
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ]));
}

