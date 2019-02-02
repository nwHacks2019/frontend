import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Source: https://www.w3schools.com/howto/howto_js_navbar_slide.asp
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      var distanceFromTop = 200;
      if (document.body.scrollTop > distanceFromTop ||
          document.documentElement.scrollTop > distanceFromTop) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
    }
  }

}
