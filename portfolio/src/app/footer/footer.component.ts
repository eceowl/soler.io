import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showFacebook() {
    window.open("https://fb.me/SolerDotIO");
  }

  showInstagram() {
    window.open("https://www.instagram.com/soler.io");
  }

  showTwitter() {
    window.open("https://www.twitter.com/SolerDotIO");
  }
}
