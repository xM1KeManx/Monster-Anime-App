import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavController } from '@ionic/angular/standalone';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, NgFor],
})
export class HomePage implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoSlide() {
    if (this.slideInterval) clearInterval(this.slideInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 3;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 3) % 3;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  navigate(page: string) {
  window.location.href = `/${page}`;
  }
}