import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  // Inputs:
  // title (string): Title of the movie
  // releaseDate (string): Release date of the movie
  // listOfDates (string array): List of upcoming movie dates

  @Input() title: string = 'Movie Title';
  @Input() releaseDate: string = '21 Nov 2021';
  @Input() listOfDates: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
