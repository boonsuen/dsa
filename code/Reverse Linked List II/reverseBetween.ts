class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const reverseBetween = (
  head: ListNode | null,
  left: number,
  right: number
): (ListNode | null) => {
  let position = 1;
  let currentNode = head;
  let start = head;

  while (position < left) {
    start = currentNode;
    currentNode = currentNode.next;
    position++;
  }

  let prev = null; // for reversing the list
  let tail = currentNode;
  while (position >= left && position <= right) {
    const next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
    position++;
  }
  start.next = prev;
  tail.next = currentNode;

  if (left > 1) {
    return head;
  } else {
    return prev;
  }
};

export {};