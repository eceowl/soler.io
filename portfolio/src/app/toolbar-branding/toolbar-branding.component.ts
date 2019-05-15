import { Component, OnInit } from '@angular/core';
import {ScrollService} from "../services/scroll.service";

@Component({
  selector: 'app-toolbar-branding',
  templateUrl: './toolbar-branding.component.html',
  styleUrls: ['./toolbar-branding.component.css']
})
export class ToolbarBrandingComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  scrollToTop() {
    this.scrollService.scrollToTop();
  }
}
