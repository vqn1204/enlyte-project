import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  // Inputs:
  // max (number): The maximum value that the progress meter will be calculated based off
  // current (number): The current value that the progress meter will be calculated based off
  // meterColor (string): A class that will color the progress meter bar. Options include: bg-green, bg-hi-alert, bg-alert, bg-gold
  //                      and any of the color variables prefaced by "bg-".
  // customColor (string): Any valid string for the "background-color" css property.

  // Notes:
  // One of meterColor or customColor is required. The other may be optional.
  // The custom color field will always take precedence over the meterColor field if both are provided.

  @Input() max: number = 100;
  @Input() current: number = 50;
  @Input() meterColor: string = 'bg-green';
  @Input() customColor: string = '';
  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.progress = this.calcProgress();
  }

  // returns a number that represents percentage of progress based on the max and current values
  calcProgress(): number {
    return this.current / this.max * 100;
  }

}
