class MyQueue {
  in: number[];
  out: number[];
  constructor() {
    this.in = [];
    this.out = [];
  }

  push(x: number): void {
    this.in.push(x);
  }

  pop(): number {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  peek(): number {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  empty(): boolean {
    return !this.out.length && !this.in.length;
  }
}

export {};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
