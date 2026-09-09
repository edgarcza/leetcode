import { printList, toLinkedList, type ListNode } from "./helpers/lists.js";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  console.log(printList(head));
  let currNode = head;
  let lastNode: ListNode | null = null;

  while (currNode) {
    if (currNode.val === currNode.next?.val) {
      let localCurrNode: ListNode | null = currNode;
      while (localCurrNode?.val === currNode.val) {
        localCurrNode = localCurrNode.next;
      }

      if (!lastNode) {
        head = localCurrNode;
      } else {
        lastNode.next = localCurrNode;
      }
      currNode = localCurrNode;
    } else {
      lastNode = currNode;
      currNode = currNode.next;
    }
  }

  return head;
}

console.log(
  "---- RESULT",
  printList(deleteDuplicates(toLinkedList([1, 2, 3, 3, 3, 4, 4, 5]))),
  "[1,2,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(deleteDuplicates(toLinkedList([1, 1, 1, 2, 3]))),
  "[2,3]",
  "----\n",
);
