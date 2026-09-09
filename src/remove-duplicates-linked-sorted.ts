import { printList, toLinkedList, type ListNode } from "./helpers/lists.js";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let currNode = head;
  let lastNode = head;

  while (currNode) {
    if (lastNode!.val !== currNode.val) {
      lastNode!.next = currNode;
      lastNode = currNode;
    }

    if (!currNode.next && currNode.val === lastNode?.val) {
      lastNode.next = null;
    }

    currNode = currNode.next;
  }

  return head;
}

console.log(
  "---- RESULT",
  printList(deleteDuplicates(toLinkedList([1, 1, 2]))),
  "[1,2]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(deleteDuplicates(toLinkedList([1, 1, 2, 3, 3]))),
  "[1,2,3]",
  "----\n",
);
