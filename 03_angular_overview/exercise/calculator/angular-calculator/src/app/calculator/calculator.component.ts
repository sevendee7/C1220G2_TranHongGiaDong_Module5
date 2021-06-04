import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addition(): void {
    this.result = Number(this.firstNumber) + Number(this.secondNumber);
  }

  abstraction(): void {
    this.result = Number(this.firstNumber) - Number(this.secondNumber);
  }

  multiplication(): void {
    this.result = Number(this.firstNumber) * Number(this.secondNumber);
  }

  division(): void {
    this.result = Number(this.firstNumber) / Number(this.secondNumber);
  }

  setFirstNumberByChange($event: any): void {
    this.firstNumber = $event.target.value;
  }

  setSecondNumberByChange($event: any): void {
    this.secondNumber = $event.target.value;
  }
}
