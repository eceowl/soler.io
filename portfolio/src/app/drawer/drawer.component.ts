import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleDrawer(isOpen: boolean) {
    this.opened = isOpen;
  }


}
