import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  date$ = new Subject<Date>();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.date$.next(new Date);
  }
}
