import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private httpClient: HttpClient) {

    this.httpClient.get("/items/project-list.json").subscribe(results => {
        this.projects = results as Project[];
    });
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
