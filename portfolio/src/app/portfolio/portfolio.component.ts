import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project";
import {projects} from "../constants/projects"
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,) {
    this.projects = projects;
    iconRegistry.addSvgIcon(
      'external-link',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/external_link.svg'));
  }

  ngOnInit() {
  }

  openLink(link: string) {
    window.open(link);
  }

}
