import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'neighbor-helper';

  toggleGiving = false;
  toggleSeeking = false;

  constructor() {}

  onClickStartGiving() {
    this.toggleGiving = !this.toggleGiving;
    this.toggleSeeking = false;
    console.log(this.toggleGiving);
  }

  onClickStartSeeking() {
    this.toggleSeeking = !this.toggleSeeking;
    this.toggleGiving = false;
  }
  ngOnInit() {

  }

}

