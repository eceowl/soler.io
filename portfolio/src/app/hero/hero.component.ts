import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero} from "../models/hero";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("/assets/sections/hero-section.json").subscribe(response => {
      console.log(response);
      this.hero = response;
    });
  }

  sendEmail() {
    window.open("https://app.hellobonsai.com/u/soler-io/contact");
  }

}
