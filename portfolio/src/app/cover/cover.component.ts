import { Component, OnInit } from '@angular/core';
import {Animation} from "@angular/animations/browser/src/dsl/animation";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  animations: [
    trigger('fadeOut', [
        state('visible', style({
          opacity: 1,
        })),
        state('invisible', style({
          opacity: 0.0,
        })),
        state('offscreen', style({
          transform: 'translateX(-100%)'
        })),
        transition('visible => invisible', [
          animate('0.5s')
        ]),
        transition('invisible => offscreen', [
          animate('0.1s')
        ]),
      ]),
      trigger('fadeIn', [
        state('visible', style({
          opacity: 1,
        })),
        state('onscreen', style({
          transform: 'translateX(0)'
        })),
        transition('onscreen => visible', [
          animate('0.5s')
        ]),
      ]),
  ]
})
export class CoverComponent implements OnInit {

  public isPingActive: boolean = false;
  public isFranklinActive: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isPingActive = true;
    setInterval(() => {
      if (this.isPingActive) {
        this.isFranklinActive = true;
        this.isPingActive = false;
      } else {
        this.isFranklinActive = false;
        this.isPingActive = true;
      }
    },5000);
  }

}
