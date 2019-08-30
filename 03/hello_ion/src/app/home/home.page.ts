import { Component } from '@angular/core';
import { Prodi } from '../prodi/prodi.model';
import { ProdiService } from '../prodi/prodi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  campus: string;
  website: string;
  prodi: Prodi[];

  constructor(private prodiService: ProdiService) {}

  ngOnInit()
  {
    this.campus = "Universitas Multimedia Nusantara";
    this.website = "www.umn.ac.id";
    this.prodi = this.prodiService.getAllProdi();
  }

  singkatCampus()
  {
    this.campus = "UMN";
  }
}
