import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private isOpenedSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly isOpened$: Observable<boolean> =  this.isOpenedSource.asObservable();
  constructor() {

  }

  openDrawer() {
    this.isOpenedSource.next(true);
  }

  closeDrawer() {
    this.isOpenedSource.next(false);
  }
}
