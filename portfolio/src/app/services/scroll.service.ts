import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {distinctUntilChanged, filter, map, pairwise, throttleTime} from "rxjs/operators";
import {DOCUMENT} from "@angular/common";
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
              @Inject(PLATFORM_ID) private platformId: Object)
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
    if (section == "about") {
      const element = this.document.getElementById('about-content');
      console.log(element);

      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
