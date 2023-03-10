import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { CounterComponent } from './counter/counter.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}
