import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Prodi } from '../prodi/prodi.model';
import { ProdiService } from '../prodi/prodi.service';

@Component({
  selector: 'app-prodi-detil',
  templateUrl: './prodi-detil.page.html',
  styleUrls: ['./prodi-detil.page.scss'],
})
export class ProdiDetilPage implements OnInit {
  prodi: Prodi;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prodiService: ProdiService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        this.prodi = this.prodiService.getProdi(paramMap.get('kode'));
      }
    )
  }

  async hapusProdi()
  {
    const alert = await this.alertController.create({
      header: 'Yakin?',
      message: 'Beneran mau hapus prodi?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'hehe',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.prodiService.deleteProdi(this.prodi.kode_prodi);
            this.router.navigate(['/home']);
          }
        }
      ]
    });
    await alert.present();
  }
}
