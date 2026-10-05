import { ListNode, printList, toLinkedList } from "./helpers/lists.js";

function partition(head: ListNode | null, x: number): ListNode | null {
  printList(head);
  console.log("X:", x);

  if (!head?.next) return head;

  let currNode = head,
    part = false,
    partMHead = new ListNode(),
    partMCurr = partMHead,
    partMLast = new ListNode(),
    part1Head: ListNode | null = null,
    part1Curr = part1Head,
    part2Head = new ListNode(),
    part2Curr = part2Head,
    part1Last = part1Head;

  while (currNode) {
    if (!part || currNode.val <= x) {
      if (currNode.val === x) {
        part = true;
        partMCurr.next = new ListNode(x);
        partMCurr = partMCurr.next;
        partMLast = partMCurr;
      } else {
        let node: ListNode | null = part1Head;
        let prev: ListNode | null = null;

        if (!part1Head) {
          part1Head = new ListNode(currNode.val);
        } else {
          printList(part1Head);
          while (node) {
            if (node.val > currNode.val && node.val > x && currNode.val < x) {
              if (prev) {
                const tmp = prev.next;
                prev.next = new ListNode(currNode.val, tmp);
              } else {
                part1Head = new ListNode(currNode.val, node);
              }

              break;
            }

            if (!node.next) {
              node.next = new ListNode(currNode.val);
              break;
            }

            prev = node;
            node = node.next;
          }
        }
      }
    } else {
      part2Curr.next = new ListNode(currNode.val);
      part2Curr = part2Curr.next;
    }

    currNode = currNode.next;
  }

  let n = part1Head;
  while (n) {
    if (!n.next) part1Last = n;
    n = n.next;
  }

  console.log("part1", printList(part1Head, true));
  console.log("part2", printList(part2Head, true));
  console.log("partM", printList(partMHead, true));
  console.log("last", printList(part1Last, true));

  if (part) {
    partMLast.next = part2Head.next;
    if (!part1Head) {
      return partMHead.next;
    }
    part1Last!.next = partMHead.next;
  } else part1Last!.next = part2Head.next;

  return part1Head;
}

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([1, 4, 3, 2, 5, 2]), 3), true),
  "[1,2,2,4,3,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([2, 1]), 2), true),
  "[1,2]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([4, 3, 2, 5, 2]), 3), true),
  "[2,2,4,3,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([1, 4, 3, 0, 2, 5, 2]), 3), true),
  "[1,0,2,2,4,3,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([1, 4, 3, 0, 5, 2]), 2), true),
  "[1,0,4,3,5,2]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([]), 0), true),
  "[]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([1, 1]), 0), true),
  "[1,1]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([1, 2, 4, 3, 5, 6, 4, 3, 3, 7]), 3), true),
  "[1,1]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([1, 1]), 1), true),
  "[1,1]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(partition(toLinkedList([1, 2]), 1), true),
  "[1,2]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(
    partition(toLinkedList([1, 2, 0, 3, 1, 2, 1, 0, 2, 2, 2, 1, 0, 2]), 2),
    true,
  ),
  "[1,0,1,1,0,1,0,2,3,2,2,2,2,2]",
  "----\n",
);
