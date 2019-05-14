import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  daveSkills = [
    "Responsive Website Development",
    "Mobile App Development",
  ];

  gillSkills = [
    "Digital Content Strategy",
    "Writing/Editorial Content",
    "Social Media Marketing"
  ];

  constructor() { }

  ngOnInit() {
  }

}
