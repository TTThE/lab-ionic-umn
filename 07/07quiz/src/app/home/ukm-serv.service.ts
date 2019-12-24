import { Injectable } from '@angular/core';
import { UKM } from './UKM';

@Injectable({
  providedIn: 'root'
})
export class UkmServService {
  private all_ukm: UKM[] = [
    {
      id: 'u1',
      name: 'Basket',
      imageURL: "https://image.flaticon.com/icons/svg/2128/2128323.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis lorem, sodales ut turpis vel, mattis faucibus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec ultricies purus, sed malesuada nisi. Praesent nec nibh sit amet ex interdum interdum. Sed mollis ac lacus vitae suscipit. Donec a pretium risus."
    },
    {
      id: 'u2',
      name: 'Voli',
      imageURL: "https://image.flaticon.com/icons/svg/1476/1476100.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis lorem, sodales ut turpis vel, mattis faucibus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec ultricies purus, sed malesuada nisi. Praesent nec nibh sit amet ex interdum interdum. Sed mollis ac lacus vitae suscipit. Donec a pretium risus."
    },
    {
      id: 'u3',
      name: 'Futsal',
      imageURL: "https://image.flaticon.com/icons/svg/1165/1165249.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis lorem, sodales ut turpis vel, mattis faucibus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec ultricies purus, sed malesuada nisi. Praesent nec nibh sit amet ex interdum interdum. Sed mollis ac lacus vitae suscipit. Donec a pretium risus."
    }
  ];

  private joined_ukm: UKM[] = [];

  constructor() { }

  getAllUKMs()
  {
    return [...this.all_ukm];
  }
  getUKM(ukmId: string)
  {
    return {
      ...this.all_ukm.find(ukm => {
        return ukm.id === ukmId;
      })
    };
  }
  joinUKM(ukm: UKM)
  {
    this.joined_ukm.push(ukm);
  }
  leaveUKM(ukmId: string)
  {
    this.joined_ukm = this.joined_ukm.filter(q => {
      return q.id !== ukmId;
    })
  }
  getJoinedUKMs()
  {
    return [...this.joined_ukm];
  }
}
