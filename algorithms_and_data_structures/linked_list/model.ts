export interface ILinkedListNode {
  val: number;
  next: ILinkedListNode | null;
}

export interface ILinkedList {
  get(index: number): number;
  addAtHead(val: number): void;
  addAtTail(val: number): void;
  addAtIndex(index: number, val: number): void;
  deleteAtIndex(index: number): void;
}
