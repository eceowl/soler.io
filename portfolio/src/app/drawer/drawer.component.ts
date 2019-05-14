import {Component, Input, OnInit} from '@angular/core';
import {DrawerService} from "../services/drawer.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  opened: boolean;

  constructor(private drawerService: DrawerService) {
    drawerService.isOpened$
      .subscribe(isOpen => {
        this.toggleDrawer(isOpen);
      });
  }

  ngOnInit() {
  }

  toggleDrawer(isOpen: boolean) {
    this.opened = isOpen;
  }


}
