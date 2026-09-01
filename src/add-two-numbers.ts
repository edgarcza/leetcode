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

function toLinkedListV2(num: bigint) {
  let n = num;

  let val = n % 10n;
  n = n / 10n;

  const first = new ListNode(Number(val));
  let node = first;

  while (n > 0) {
    val = n % 10n;
    n = n / 10n;

    const nn = new ListNode(Number(val));
    node.next = nn;

    node = nn;
  }

  return first;
}

function addTwoNumbers_(l1: ListNode, l2: ListNode): ListNode | null {
  let n = 0;

  let num1 = BigInt(0);
  let node: ListNode | null = l1;

  while (node) {
    num1 = BigInt(node.val) * 10n ** BigInt(n) + num1;

    node = node.next;

    n++;
  }

  let num2 = BigInt(0);
  node = l2;
  n = 0;

  while (node) {
    num2 = BigInt(node.val) * 10n ** BigInt(n) + num2;

    node = node.next;

    n++;
  }

  const sum = num1 + num2;

  const first = toLinkedListV2(sum);

  return first;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const zNode = new ListNode();
  let node = zNode;
  let rest = 0;

  while (l1 || l2 || rest > 0) {
    const l1Val = l1?.val ?? 0;
    const l2Val = l2?.val ?? 0;

    const sum = l1Val + l2Val + rest;
    rest = Math.trunc(sum / 10);

    const wNode = new ListNode(sum % 10);

    node.next = wNode;

    node = wNode;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return zNode.next;
}

const n1 = toLinkedList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const n2 = toLinkedList([5, 6, 4]);

// const n1 = toLinkedList([2, 4, 3]);
// const n2 = toLinkedList([5, 6, 4]);

addTwoNumbers(n1, n2);
