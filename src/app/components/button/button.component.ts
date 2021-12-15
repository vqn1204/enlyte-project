import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  // Inputs:
  // text (string): The text that gets displayed on the button.
  // textColor (string): Color of the text. Can be any valid string for the "color" css property;
  // buttonColor (string): A class that will color the button. Options include: bg-green, bg-hi-alert, bg-alert, bg-gold
  //                       and any of the color variables prefaced by "bg-".

  @Input() text: string = 'Button Text';
  @Input() textColor: string = 'black';
  @Input() buttonColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
