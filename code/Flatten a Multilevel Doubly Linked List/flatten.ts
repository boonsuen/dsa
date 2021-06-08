class Node {
  val: number
  prev: Node | null
  next: Node | null
  child: Node | null
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = (val === undefined ? 0 : val);
    this.prev = (prev === undefined ? null : prev);
    this.next = (next === undefined ? null : next);
    this.child = (child === undefined ? null : child);
  }
}

// Start from the head, move one step each time to the next node
// When meet with a node with child, say node p, follow its child chain to the end and connect the tail node with p.next, by doing this we merged the child chain back to the main thread
// Return to p and proceed until find next node with child.
// Repeat until reach null

const flatten = (head: Node | null): Node | null => {
  if (head === null) return head;

  let p = head;

  while (p !== null) {
    // Without child
    if (p.child === null) {
      p = p.next;
      continue;
    }
    // With child
    let tail = p.child;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = p.next;

    if (p.next !== null) {
      p.next.prev = tail;
    }

    p.next = p.child;
    p.child.prev = p;
    p.child = null;
    p = p.next;
  }

  return head;
};

export { };