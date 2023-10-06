class UnionFind {
  private id: number[];
  private size: number[];

  constructor(n: number) {
    this.id = new Array<number>(n);
    this.size = new Array<number>(n);
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.size[i] = 1;
    }
  }

  private findRoot(i: number): number {
    // Chase pointers until you reach the root
    while (i !== this.id[i]) {
      i = this.id[i];
    }
    // Then return it
    return i;
  }

  connected(p: number, q: number): boolean {
    return this.findRoot(p) === this.findRoot(q);
  }

  union(p: number, q: number): void {
    let i = this.findRoot(p);
    let j = this.findRoot(q);

    // Edge case: if i and j have the same root, there's no need for a union
    if (i === j) {
      return;
    }

    // Otherwise perform a union of the smaller tree into the bigger tree
    if(this.size[i] < this.size[j]){
        this.id[i] = j;
        this.size[j] += this.size[i];
    } else {
        this.id[j] = i;
        this.size[i] += this.size[j];
    }

  }

}

export default UnionFind;
