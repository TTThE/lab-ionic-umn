import { Component, OnInit } from '@angular/core';
import { UKM } from '../home/UKM';
import { ActivatedRoute } from '@angular/router';
import { UkmServService } from '../home/ukm-serv.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ukm-detail',
  templateUrl: './ukm-detail.page.html',
  styleUrls: ['./ukm-detail.page.scss'],
})
export class UkmDetailPage implements OnInit {
  loadedUKM: UKM;
  constructor(private activatedRoute: ActivatedRoute,
    private ukmServ: UkmServService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('ukmId'))
        {
          return;
        }
        this.loadedUKM = this.ukmServ.getUKM(paramMap.get('ukmId'));
      }
    )
  }
  async presentAlert()
  {
    const alert = await this.alertController.create({
      header: 'Join UKM',
      message: 'Gabung ke dalam UKM ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Serius',
          handler: () => this.ukmServ.joinUKM(this.loadedUKM)
        }
      ]
    });
    await alert.present();
  }
}
