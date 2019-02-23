import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: "og:title", content: "Give+Seek"},
      {name: "og:image", content: "assets/img/logos/logo.png"},
      {name: "og:description", content: "A platform for human connection and support when we need it most. Project for nwHacks 2019."}
    ]);
  }

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
