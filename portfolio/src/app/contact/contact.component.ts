import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero} from "../models/hero";
import {ContactUs} from "../models/contact-us";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: ContactUs;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("/assets/sections/contact-section.json").subscribe((response : ContactUs) => {
      this.contact = response;
    });
  }

  contactUs() {
    window.open("https://app.hellobonsai.com/u/soler-io/contact");
  }

}
