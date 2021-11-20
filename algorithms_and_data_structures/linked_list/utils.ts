import { ILinkedList, ILinkedListNode } from './model';

export const log = (...args) => console.log.apply(console, args);

export function printList(list: ILinkedList) {
  let i = 0;
  let val = -1;
  const values = [];

  while ((val = list.get(i++)) >= 0) values.push(val);

  log(`list: [${values.join(', ')}]`);
}

export function getListItems(head: ILinkedListNode | null): ILinkedListNode[] {
  const items: ILinkedListNode[] = [];
  let node = head;

  while (node) {
    items.push(node);
    node = node.next;
  }

  return items;
}

export function getListItemsString(head: ILinkedListNode | null): string {
  return `list: [${getListItems(head)
    .map(({ val }) => val)
    .join(', ')}]`;
}
