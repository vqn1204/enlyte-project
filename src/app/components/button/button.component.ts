import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // Inputs:
  // text (string): The text that gets displayed on the button.
  // textColor (string): Color of the text. Can be any valid string for the "color" css property;
  // buttonColor (string): A class that will color the button. Options include: bg-green, bg-hi-alert, bg-alert, bg-gold
  //                       and any of the color variables prefaced by "bg-".
  // customColor (string): Color for the background of the button. Can be any valid string for the "background-color" css property.

  // Notes:
  // One of buttonColor or customColor is required. The other may be optional.
  // The custom color field will always take precedence over the buttonColor field if both are provided.

  @Input() text: string = 'Button Text';
  @Input() textColor: string = 'black';
  @Input() buttonColor: string = '';
  // if we give this option I think we would need to have options for the button states too
  @Input() customColor: string = ''; 

  // what if we want to provide the option to change border radius, thickness, etc?
  // we could make them as inputs here or the user would have to add classes to the <app-button> element
  // if option 2 then every single <app-button> element would have to be given a container type class so 
  // we could target the button inside. could become messy with the nesting.
  constructor() { }

  ngOnInit(): void {
  }

}
