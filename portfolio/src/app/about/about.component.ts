import { Component, OnInit } from '@angular/core';
import {StaffMember} from "../models/staff-member";
import {staff} from "../constants/staff";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  staff: StaffMember[];

  constructor() {
    this.staff = staff;
  }

  ngOnInit() {
  }

}
