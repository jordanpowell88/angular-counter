import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  standalone: true,
  selector: 'app-counter',
  imports: [AsyncPipe],
  providers: [CounterService],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  
  private readonly countService = inject(CounterService)

  count = this.countService.count
  
  increment() {
    this.countService.increment();
  }

  decrement() {
    this.countService.decrement();

  }

}
