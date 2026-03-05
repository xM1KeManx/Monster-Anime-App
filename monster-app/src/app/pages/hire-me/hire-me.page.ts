// src/app/pages/hire-me/hire-me.page.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-hire-me',
  templateUrl: 'hire-me.page.html',
  styleUrls: ['hire-me.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton,
  ],
})
export class HireMePage {

  goHome() { window.location.href = '/home'; }
  goBack() { window.location.href = '/home'; }
}
