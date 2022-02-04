import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

type Job = [number, number, number];

// https://www.educative.io/courses/grokking-the-coding-interview/YVwln9kYxV2
function getMaxCpuLoad(jobs: Job[]): number {
  let maxCpuLoad = 0;

  jobs.sort(([start1], [start2]) => start1 - start2);
  // Min heap to store the jobs with min end time at the peek.
  const minHeap = new Heap([], null, (job1, job2) => job2[1] - job1[1]);

  for (let i = 0; i < jobs.length; i++) {
    const [start] = jobs[i];
    // Remove already finished jobs.
    while (minHeap.length && minHeap.peek()[1] <= start) {
      minHeap.pop();
    }

    // Add current job.
    minHeap.push(jobs[i]);

    maxCpuLoad = Math.max(
      maxCpuLoad,
      minHeap.reduce((acc, job) => (acc += job[2]), 0)
    );
  }

  return maxCpuLoad;
}

export function testMaxCpuLoad() {
  log('Expected 0, got: ', getMaxCpuLoad([]));
  log(
    'Expected 7, got: ',
    getMaxCpuLoad([
      [1, 4, 3],
      [2, 5, 4],
      [7, 9, 6],
    ])
  );
  log(
    'Expected 15, got: ',
    getMaxCpuLoad([
      [6, 7, 10],
      [2, 4, 11],
      [8, 12, 15],
    ])
  );
  log(
    'Expected 8, got: ',
    getMaxCpuLoad([
      [1, 4, 2],
      [2, 4, 1],
      [3, 6, 5],
    ])
  );
}
