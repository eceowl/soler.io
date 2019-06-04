import { Component, OnInit } from '@angular/core';
import {StaffMember} from "../models/staff-member";
import {staff} from "../constants/staff";
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  staff: StaffMember[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get("/assets/sections/staff-list.json").subscribe(response => {
      console.log(response);
      this.staff = response["staff"].map(s => s.staffMember);
    }); 
  }

}
