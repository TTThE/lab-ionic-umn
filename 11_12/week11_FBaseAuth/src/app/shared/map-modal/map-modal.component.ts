import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { environment } from 'src/environments/environment';

//minggu 13
import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit {
  lat = 96.696969;
  lng = 7.772238;

  @ViewChild('map', { static: false }) mapElementRef: ElementRef;

  constructor(private modalCtrl: ModalController,
    private renderer: Renderer2,
    //minggu 13 -->v
    private alertCtrl: AlertController) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getGoogleMaps().then((googleMaps) => {
      const mapElement = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapElement, {
        center: { lat: this.lat, lng: this.lng },
        zoom: 16
      });
      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapElement, 'visible');
      });

      //<Minggu 13>
      this.getLocation().then(loc => {
        if(!loc){
          const marker = new googleMaps.Marker({ position: { lat: this.lat, lng: this.lng }, map });
        }
        else{
          const marker = new googleMaps.Marker({ position: { lat: loc.latitude, lng: loc.longitude }, map });
          map.panTo(new googleMaps.LatLng(loc.latitude, loc.longitude));
        }
      });

      map.addListener('click', event => {
        const selectedCoords = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };
        this.modalCtrl.dismiss(selectedCoords);
      });
    }).catch(err => {
      console.log(err);
    });
      //</Minggu 13>

      /* tambah marker - minggu 12 */
      //const marker = new googleMaps.Marker({ position: { lat: this.lat, lng: this.lng }, map });
      //console.log(marker); //coba cek isi marker
    //   map.addListener('click', event => {
    //     const selectedCoords = {
    //       lat: event.latLng.lat(),
    //       lng: event.latLng.lng()
    //     };
    //     this.modalCtrl.dismiss(selectedCoords);
    //   });
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  onChooseLocation(event: any) {
    console.log('test1');
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log('test');
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    if(googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.mapsAPIKey}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        const loadedGoogleModule = win.google;
        if(loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        }
        else {
          reject("Google Maps SDK is currently unavailable.");
        }
      };
    });
  }

  //<minggu 13>
  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed',
      message: "Could not obtain user location.",
      buttons: ['OK']
    });

    await alert.present();
  }

  async getLocation(){
    if(!Capacitor.isPluginAvailable('Geolocation')){
      this.presentAlert();
      return null;
    }

    const coordinates = await Plugins.Geolocation.getCurrentPosition();
    //.getCurrentLocation()-nya bawaan
    return coordinates.coords; //.coords-nya bawaan juga
  }
  //</minggu 13>
}
