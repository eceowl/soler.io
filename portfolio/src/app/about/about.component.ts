import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  daveSkills = [
    "Responsive Web Development",
    "Mobile App Development",
  ];

  daveTechnologies = [
    "C#",
    "Java",
    "Angular",
    "Xamarin Forms",
    "Flutter",
    "WordPress",
  ];

  gillSkills = [
    ""
  ];

  constructor() { }

  ngOnInit() {
  }

}
