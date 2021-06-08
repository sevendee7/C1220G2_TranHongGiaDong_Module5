import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-time',
  templateUrl: './start-time.component.html',
  styleUrls: ['./start-time.component.css']
})
export class StartTimeComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
