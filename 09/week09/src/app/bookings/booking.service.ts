import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'b001',
      placeId: 'p1',
      placeTitle: 'Gading Apartment',
      guestNumber: 3,
      userId: 'abc'
    }
  ];

  constructor() { }

  get bookings() {
    return [...this._bookings];
  }
}
