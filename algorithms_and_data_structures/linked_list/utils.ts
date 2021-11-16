import { ILinkedList } from './model';

export const log = (...args) => console.log.apply(console, args);

export function printList(list: ILinkedList) {
  let i = 0;
  let val = -1;
  const values = [];

  while ((val = list.get(i++)) >= 0) values.push(val);

  log(`list: [${values.join(', ')}]`);
}
