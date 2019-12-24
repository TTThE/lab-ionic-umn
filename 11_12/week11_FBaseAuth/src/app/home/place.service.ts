import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  currentAddress = new BehaviorSubject<string>('');

  constructor() { }

  getAddress() {
    return this.currentAddress.asObservable();
  }
  setAddress(address: string) {
    this.currentAddress.next(address);
  }
}
