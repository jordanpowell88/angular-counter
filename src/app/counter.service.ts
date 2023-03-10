import { Injectable, signal } from '@angular/core';

@Injectable()
export class CounterService {
  count = signal(0)

  increment() {
    this.count.update(c => c = c + 1)
  }

  decrement() {
    this.count.update(c => c = c - 1)
  }
}
