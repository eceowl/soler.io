import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {distinctUntilChanged, filter, map, pairwise, throttleTime} from "rxjs/operators";
import {DOCUMENT} from "@angular/common";
import {DrawerService} from "./drawer.service";
enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scroll$: Observable<Direction>;
  scrollUp$: Observable<Direction>;
  scrollDown$: Observable<Direction>;

  constructor(@Inject(DOCUMENT) private document:any,
              @Inject(PLATFORM_ID) private platformId: Object,
              private drawerService: DrawerService)
  {
    this.scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
    );

    this.scrollUp$ = this.scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    this.scrollDown$ = this.scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );
  }

  scrollToSection(section: string) {
    let element;
    if (section == "about") {
      element = this.document.getElementById('about-content');
    } else if (section == "portfolio") {
      element = this.document.getElementById('portfolio-content');
    } else if (section == "contact") {
      element = this.document.getElementById('contact-content');
    }

    if (element) {
      this.scrollToElement(element);
    }
  }

  scrollToTop() {
    this.scrollToElement(this.document.body);
  }


  private scrollToElement(el: HTMLElement) {
    this.drawerService.closeDrawer();
    el.scrollIntoView({behavior: "smooth"});
  }
}
