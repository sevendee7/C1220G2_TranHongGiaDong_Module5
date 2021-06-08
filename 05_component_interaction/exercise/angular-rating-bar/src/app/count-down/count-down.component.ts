import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  @Input()
  count: number = 0;
  resetTime: number = this.count;

  @Output()
  intervalId: number = 0;
  message: string = '';

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at Time ${this.count} seconds`;
  }

  reset() {
    this.clearTimer();
    this.count=this.resetTime;
    this.message = 'Click start to start count down';
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
        this.count -= 1;
        if (this.count === 0) {
          this.message = "Blast off!";
          this.clearTimer();
        } else {
          this.message = `Time -${this.count} seconds and counting`;
        }
      }, 1000
    );
  }

}
