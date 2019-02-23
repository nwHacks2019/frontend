import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: "og:title", content: "Give+Seek | About"},
      {name: "og:image", content: "assets/img/laptops.jpg"},
      {name: "og:description", content: "A platform for human connection and support when we need it most. Project for nwHacks 2019."}
    ]);
  }

  ngOnInit() {
  }

}
