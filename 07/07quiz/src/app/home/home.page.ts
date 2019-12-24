import { Component, OnInit } from '@angular/core';
import { UKM } from './UKM';
import { UkmServService } from './ukm-serv.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ukm_list: UKM[];
  constructor(private ukmServ: UkmServService) {}

  ngOnInit() {
    this.ukm_list = this.ukmServ.getAllUKMs();
  }
}
