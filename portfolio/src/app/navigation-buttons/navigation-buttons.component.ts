import { Component, OnInit } from '@angular/core';
import {ScrollService} from "../services/scroll.service";
import {DrawerService} from "../services/drawer.service";

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {

  constructor(private scrollService: ScrollService,
              private drawerService: DrawerService) { }

  ngOnInit() {
  }

  scrollTo(section: string) {
    this.drawerService.closeDrawer();
    this.scrollService.scrollToSection(section);
  }

}
