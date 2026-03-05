import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonButton,
  ],
})
export class AboutPage {
  goHome() { window.location.href = '/home'; }
  goBack() { window.location.href = '/home'; }
}