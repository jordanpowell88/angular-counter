import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
  private count = 0
  private readonly _count = new BehaviorSubject(0)
  count$ = this._count.asObservable()

  increment() {
    this.count ++
    this._count.next(this.count)
  }

  decrement() {
    this.count --
    this._count.next(this.count)
  }
}
