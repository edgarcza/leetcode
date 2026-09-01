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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const head = new ListNode();
  let node = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      node.next = list1;

      list1 = list1.next;
    } else {
      node.next = list2;

      list2 = list2.next;
    }

    node = node.next
  }

  node.next = list1 || list2;

  return head.next;
}

console.log(
  "---- RESULT",
  printList(mergeTwoLists(toLinkedList([1, 2, 4]), toLinkedList([1, 3, 4]))),
  "[1,1,2,3,4,4]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(mergeTwoLists(toLinkedList([]), toLinkedList([]))),
  "[]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(mergeTwoLists(toLinkedList([]), toLinkedList([0]))),
  "[0]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(
    mergeTwoLists(toLinkedList([5, 10, 15, 40]), toLinkedList([2, 3, 20, 35])),
  ),
  "[0]",
  "----\n",
);
