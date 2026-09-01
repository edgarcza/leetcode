class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function toLinkedList(num: number[]) {
  if (num.length === 0) return null;

  const first = new ListNode(num[0]);
  let node = first;

  for (let i = 1; i < num.length; i++) {
    const n = new ListNode(num[i]);

    node.next = n;

    node = n;
  }

  return first;
}

function printList(head: ListNode | null): void {
  const values: number[] = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  console.log(values);
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const vals: number[] = [];

  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    while (node) {
      vals.push(node.val);

      node = node.next;
    }
  }

  vals.sort((a, b) => a - b);

  const ordered = new ListNode();
  let node = ordered;

  for (let i = 0; i < vals.length; i++) {
    node.next = new ListNode(vals[i]);
    node = node.next;
  }

  return ordered.next;
}

console.log(
  "---- RESULT",
  printList(
    mergeKLists([
      toLinkedList([1, 4, 5]),
      toLinkedList([1, 3, 4]),
      toLinkedList([2, 6]),
    ]),
  ),
  "[1,1,2,3,4,4,5,6]",
  "----\n",
);

console.log("---- RESULT", printList(mergeKLists([])), "[]", "----\n");

console.log(
  "---- RESULT",
  printList(mergeKLists([toLinkedList([])])),
  "[]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(
    mergeKLists([toLinkedList([2]), toLinkedList([]), toLinkedList([-1])]),
  ),
  "[]",
  "----\n",
);
