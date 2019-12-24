import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onSignUp(f: NgForm) {
    console.log(f.value);
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
