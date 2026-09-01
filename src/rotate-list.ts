import { ListNode, printList, toLinkedList } from "./helpers/lists.js";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  function getLen() {
    let len = 1;
    let curr = head;
    while (curr?.next) {
      curr = curr.next;
      len++;
    }
    return len;
  }

  const len = getLen();
  const rots = k % len;

  console.log(len, rots);

  function rotate() {
    let prev = new ListNode();
    let curr = head;
    while (curr?.next) {
      prev = curr;
      curr = curr.next!;
    }
    curr!.next = head;
    prev.next = null;
    head = curr;
  }

  for (let i = 0; i < rots; i++) rotate();

  return head;
}

console.log(
  "---- RESULT",
  printList(rotateRight(toLinkedList([1, 2, 3, 4, 5]), 2)),
  "[4,5,1,2,3]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(rotateRight(toLinkedList([0, 1, 2]), 4)),
  "[2,0,1]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(rotateRight(toLinkedList([1]), 1)),
  "[1]",
  "----\n",
);
