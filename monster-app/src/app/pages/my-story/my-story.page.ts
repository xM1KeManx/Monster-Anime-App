// src/app/pages/my-story/my-story.page.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-story',
  templateUrl: 'my-story.page.html',
  styleUrls: ['my-story.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton,
  ],
})
export class MyStoryPage {

  goHome() { window.location.href = '/home'; }
  goBack() { window.location.href = '/home'; }
}
