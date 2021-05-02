import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatapassService {

  eventSubject: BehaviorSubject<any>;

  constructor() {
    this.eventSubject = new BehaviorSubject<any>({});
  }
  public subscribe(next: any, error: any = () => {}, complete: any = () => {}) {
    return this.eventSubject.subscribe(next, error, complete);
  }
  public send(eventName: string, eventData: any) {
    this.eventSubject.next({
      name: eventName,
      data: eventData
    });
  }
}
