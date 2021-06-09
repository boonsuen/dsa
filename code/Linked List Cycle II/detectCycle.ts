class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Naive Approach
const naiveCycleDetection = (head: ListNode | null): ListNode | null => {
  let currentNode = head;
  const seenNodes = new Set();
  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) return null;
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  
  return currentNode;
};

// Floyd's Tortoise and Hare Algorithm
const detectCycle = (head: ListNode | null): ListNode | null => {
  if (head === null) return null;

  let tortoise = head, hare = head;

  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;
    if (hare === null || hare.next === null) {
      // No cycle
      return null;
    } else {
      hare = hare.next;
    }    

    if (tortoise === hare) break;
  }

  let p1 = head;
  let p2 = tortoise;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};

export {};
