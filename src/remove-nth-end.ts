class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function toLinkedList(num: number[]) {
  const first = new ListNode(num[0]);
  let node = first;

  for (let i = 1; i < num.length; i++) {
    const n = new ListNode(num[i]);

    node.next = n;

    node = n;
  }

  return first;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  function reverseList(list: ListNode | null) {
    let prev: ListNode | null = null;
    let curr = list;

    while (curr !== null) {
      const next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }

  let list = reverseList(head);

  if (n === 1) return reverseList(list?.next ?? null);

  let node = list;
  let count = 1;
  while (node) {
    if (count === n - 1) {
      node.next = node.next?.next ?? null;
    }

    node = node.next;

    count++;
  }

  return reverseList(list);
}

console.log(
  "---- RESULT",
  removeNthFromEnd(toLinkedList([1, 2, 3, 4, 5]), 2),
  "[1,2,3,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  removeNthFromEnd(toLinkedList([1, 2, 3, 4, 5, 6, 7, 8]), 5),
  "[1,2,3,5,6,7,8]",
  "----\n",
);

console.log(
  "---- RESULT",
  removeNthFromEnd(toLinkedList([1]), 1),
  "[]",
  "----\n",
);

console.log(
  "---- RESULT",
  removeNthFromEnd(toLinkedList([1, 2]), 1),
  "[1]",
  "----\n",
);
