import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // button inputs
  buttonText = 'Buy Tickets';

  // movie card inputs
  dates = ['May 3, 2015', 'May 4, 2015', 'May 5, 2015', 'May 6, 2015'];

  // chart inputs
  xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  yAxisData = [
    [49, 49, 60, 38, 57, 36, 30],
    [65, 60, 40, 51, 37, 22, 39],
    [10, 40, 32, 80, 55, 21, 46],
  ];
  colors = ['green', '#7F7D79', 'red'];
}
