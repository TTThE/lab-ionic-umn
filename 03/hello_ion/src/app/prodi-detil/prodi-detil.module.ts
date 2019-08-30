import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdiDetilPage } from './prodi-detil.page';

const routes: Routes = [
  {
    path: '',
    component: ProdiDetilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdiDetilPage]
})
export class ProdiDetilPageModule {}
