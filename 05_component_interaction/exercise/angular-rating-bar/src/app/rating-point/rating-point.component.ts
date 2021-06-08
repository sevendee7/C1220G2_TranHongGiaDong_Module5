import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-point',
  templateUrl: './rating-point.component.html',
  styleUrls: ['./rating-point.component.css']
})
export class RatingPointComponent implements OnInit {

  @Input()
  public ratePoint: number;

  constructor() { }

  ngOnInit(): void {
  }

}
