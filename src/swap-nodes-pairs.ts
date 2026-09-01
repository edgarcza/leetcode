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

function swapPairs(head: ListNode | null): ListNode | null {
  let node = head;
  let count = 0;
  let prev: ListNode | null = null;

  while (node) {
    console.log(count, "val", node.val);
    if (count % 2 === 0) {
      const next = node.next; // 2 // 4
      const nextnext = next?.next ?? null; // 3 // null

      console.log(next?.val, node.val, nextnext?.val, prev?.val);
      if (prev) prev.next = next ?? node; // - // 1 -> 4

      prev = node;

      if (next) next.next = node; // 2 -> 1 // 4 -> 3

      node.next = nextnext; // 1 -> 3 // 3 -> null
      node = node.next; // 3 // null

      if (count === 0 && next) head = next;
      // else prev.next = next;

      count++;
    } else {
      node = node.next;
    }

    // nhnode.next = node.next
    // nhnode.next?.next = node

    count++;
  }

  console.log(head);

  return head;
}

console.log(
  "---- RESULT",
  printList(swapPairs(toLinkedList([1, 2, 3, 4]))),
  "[2,1,4,3]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(swapPairs(toLinkedList([1]))),
  "[1]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(swapPairs(toLinkedList([1, 2, 3]))),
  "[2,1,3]",
  "----\n",
);
