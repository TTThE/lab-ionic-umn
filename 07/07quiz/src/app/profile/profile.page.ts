import { Component, OnInit } from '@angular/core';
import { UKM } from '../home/UKM';
import { UkmServService } from '../home/ukm-serv.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  joined_ukm: UKM[];
  constructor(private ukmServ: UkmServService) { }

  ngOnInit() {
    this.joined_ukm = this.ukmServ.getJoinedUKMs();
  }
  ionViewWillEnter()
  {
    this.joined_ukm = this.ukmServ.getJoinedUKMs();
  }
  onTrashBinClick(ukmId: string)
  {
    this.ukmServ.leaveUKM(ukmId);
    this.joined_ukm = this.ukmServ.getJoinedUKMs();
  }
}
