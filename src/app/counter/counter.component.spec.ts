import { ComponentFixture, TestBed } from '@angular/core/testing';
import { take } from 'rxjs';

import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CounterComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can increment the count', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const count = compiled.querySelector("#count");
    expect(count?.textContent).toContain(0);
    const button = fixture.debugElement.nativeElement.querySelector('#increment')
    button.click();
    fixture.detectChanges();
    expect(count?.textContent).toContain(1);
  })

  it('can decrement the count', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const count = compiled.querySelector("#count");
    expect(count?.textContent).toContain(0);
    const button = fixture.debugElement.nativeElement.querySelector('#decrement')
    button.click();
    fixture.detectChanges();
    expect(count?.textContent).toContain(-1);
  })

//   it('increments count$ when calling increment()', () => {
//     component.increment();
//     component.count$.pipe(
//         take(1)
//     ).subscribe((value) => {
//         expect(value).toEqual(1)
//     })
//   })

//   it('decrement count$ when calling decrement()', () => {
//     component.increment();
//     component.count$.pipe(
//         take(1)
//     ).subscribe((value) => {
//         expect(value).toEqual(1)
//     })
//   })
});
