import {AfterViewInit, Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {fromEvent} from "rxjs";
import {distinctUntilChanged, filter, map, pairwise, throttleTime} from "rxjs/operators";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ScrollService} from "../services/scroll.service";
import {DrawerService} from "../services/drawer.service";

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  private isVisible = true;

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private scrollService: ScrollService,
              private drawerService: DrawerService) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu.svg'));
  }

  ngOnInit() {

  }

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    this.scrollService.scrollUp$.subscribe(() => (this.isVisible = true));
    this.scrollService.scrollDown$.subscribe(() => (this.isVisible = false));
  }

  openSideNav() {
    this.drawerService.openDrawer();
  }
}
