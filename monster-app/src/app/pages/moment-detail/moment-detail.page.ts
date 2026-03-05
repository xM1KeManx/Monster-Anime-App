import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonButton,
} from '@ionic/angular/standalone';

export interface Moment {
  id: string;
  title: string;
  episode: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  videoUrl: string;
  videoId: string;
}

const MOMENTS: Moment[] = [
  {
    id: 'johan-detective',
    title: 'La Muerte Perfecta',
    episode: 'Episodio 29 — "Ejecutado"',
    image: 'assets/images/moment1.jpg',
    shortDesc: 'Johan elimina a un detective que lo seguía sin dejar rastro — una botella, un accidente, su firma invisible.',
    fullDesc: `Este episodio muestra a Johan en su forma más aterradora: no como un asesino violento sino como un arquitecto de muertes perfectas. Un detective que había logrado rastrear a Johan aparece muerto. La causa oficial: un accidente. Una botella. Nada que apunte a Johan.

Lo que hace esta escena tan perturbadora es precisamente lo que no se ve. Johan no necesita ensuciarse las manos. Solo un hombre que sabía demasiado y que de repente ya no existe, y una muerte tan limpia que ni siquiera levanta sospechas.

La botella no es solo el arma, es su mensaje: para Johan, matar a alguien puede ser tan simple y mundano como un accidente doméstico.`,
    videoUrl: 'https://filelions.top/embed/p5cydgti4c1l',
    videoId: '',
  },
  {
    id: 'trauma-nino',
    title: 'El Niño Roto por Johan',
    episode: 'Episodio 49 — "El Hombre que Vio al Diablo"',
    image: 'assets/images/moment2.jpg',
    shortDesc: 'Johan destruye la mente de un niño inocente sin siquiera ensuciarse las manos.',
    fullDesc: `Este episodio es uno de los más perturbadores porque Johan no mata a nadie directamente — y aun así destruye una vida por completo. Un niño que tiene el infortunio de cruzarse con Johan queda marcado de por vida tras el encuentro.

Este momento captura perfectamente por qué Johan es un villano diferente. No necesita violencia física para causar daño. Su arma es la palabra, la mirada, la idea que planta en la mente de otros.

Al traumatizar a este niño, Johan replica lo que le hicieron a él. Es uno de los momentos más oscuros y honestos sobre la naturaleza del ciclo del trauma en toda la serie.`,
    videoUrl: 'https://filelions.top/embed/sga7e4nrynhq',
    videoId: '',
  },
  {
    id: 'tenma-choice',
    title: 'La Decisión de Tenma',
    episode: 'Episodio 1 — "Herr Dr. Tenma"',
    image: 'assets/images/moment3.jpg',
    shortDesc: 'Un médico elige salvar al niño en lugar del alcalde. Esta elección cambia todo.',
    fullDesc: `El primer episodio comienza con una pregunta filosóficamente devastadora: ¿todas las vidas tienen el mismo valor? El Dr. Kenzo Tenma está a punto de demostrar que sí lo cree aunque eso le cueste todo.

Cuando llegan al hospital simultáneamente Johan y el alcalde con heridas graves, el director ordena a Tenma operar al alcalde. Tenma desobedece y opera al niño. El alcalde muere. La carrera de Tenma se destruye.

Esta decisión tomada por los principios más nobles desencadena uno de los relatos de consecuencias no intencionales más magistralmente contados en la historia del manga.`,
    videoUrl: 'https://filelions.top/embed/3d2z30zph8ku',
    videoId: '',
  },
];

@Component({
  selector: 'app-moment-detail',
  templateUrl: 'moment-detail.page.html',
  styleUrls: ['moment-detail.page.scss'],
  standalone: true,
  imports: [
    NgFor, NgIf, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton,
  ],
})
export class MomentDetailPage implements OnInit {
  moment: Moment | undefined;
  safeVideoUrl: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.moment = MOMENTS.find(m => m.id === id);
    if (this.moment) {
      let embedUrl = '';
      if (this.moment.videoUrl) {
        embedUrl = this.moment.videoUrl;
      } else {
        embedUrl = `https://www.youtube.com/embed/${this.moment.videoId}?rel=0&modestbranding=1`;
      }
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }

  getDescParagraphs(): string[] {
    if (!this.moment) return [];
    return this.moment.fullDesc.split('\n\n').filter(p => p.trim().length > 0);
  }

  goHome() { window.location.href = '/home'; }
  goBack() { window.location.href = '/moments'; }
}