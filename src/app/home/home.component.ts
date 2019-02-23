import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleGiving = false;
  toggleSeeking = false;

  onClickStartGiving() {
    this.toggleGiving = !this.toggleGiving;
    this.toggleSeeking = false;
    console.log(`Giving (vs. Seeking): ${this.toggleGiving}`);
  }

  onClickStartSeeking() {
    this.toggleSeeking = !this.toggleSeeking;
    this.toggleGiving = false;
  }

}
