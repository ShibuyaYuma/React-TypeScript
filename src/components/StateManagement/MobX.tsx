import { makeObservable, observable, action, computed } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      doubled: computed,
    });
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  get doubled(){
    return this.count * 2;
  }
}

export const MobX = new CounterStore();
