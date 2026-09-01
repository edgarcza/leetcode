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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let prev = head;
  let node = head;
  let nds: Array<ListNode> = [];
  let swaps = 0;

  while (node) {
    nds.push(node);

    if (nds.length === k) {
      let tmpPrev = new ListNode();
      for (let n = 0; n < nds.length; n++) {
        if (n === 0) {
          nds[n]!.next = node!.next;
          tmpPrev = nds[n]!;
          node = node!.next;
        } else {
          nds[n]!.next = nds[n - 1]!;
        }

        if (n === nds.length - 1) {
          if (swaps === 0) {
            head = nds[n]!;
          } else {
            prev!.next = nds[n]!;
            prev = tmpPrev;
          }
        }
      }

      nds = [];
      swaps++;
    } else {
      node = node.next;
    }
  }

  return head;
}

console.log(
  "---- RESULT",
  printList(reverseKGroup(toLinkedList([1, 2, 3, 4, 5]), 2)),
  "[2,1,4,3,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(reverseKGroup(toLinkedList([1, 2, 3, 4, 5]), 3)),
  "[3,2,1,4,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  printList(reverseKGroup(toLinkedList([1, 2, 3]), 2)),
  "[2,1,3]",
  "----\n",
);
