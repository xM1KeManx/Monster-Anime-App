// src/app/pages/moments/moments.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  videoUrl: string;  // URL embebida de YouTube (no redirige, embed)
  videoId: string;   // Para construir el embed
}

@Component({
  selector: 'app-moments',
  templateUrl: 'moments.page.html',
  styleUrls: ['moments.page.scss'],
  standalone: true,
  imports: [
    NgFor, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton,
  ],
})
export class MomentsPage {
  moments = [
    {
      id: 'johan-detective',
  title: 'La Muerte Perfecta',
  episode: 'Episodio 29 — "Ejecutado"',
  image: 'assets/images/moment1.jpg',
  shortDesc: 'Johan elimina a un detective que lo seguía sin dejar rastro — una botella, un accidente, su firma invisible.',
  fullDesc: `Este episodio muestra a Johan en su forma más aterradora: no como un asesino violento sino como un arquitecto de muertes perfectas. Un detective que había logrado rastrear a Johan y se acercaba peligrosamente a la verdad aparece muerto. La causa oficial: un accidente. Una botella. Nada que apunte a Johan.

Lo que hace esta escena tan perturbadora es precisamente lo que no se ve. Johan no necesita ensuciarse las manos. No hay pelea, no hay persecución, no hay testigos. Solo un hombre que sabía demasiado y que de repente ya no existe, y una muerte tan limpia que ni siquiera levanta sospechas.

Es el momento que mejor ilustra por qué Johan es prácticamente imposible de atrapar. Mientras detectives, policías y el propio Tenma intentan seguirle el rastro, Johan opera en un nivel diferente — eliminando a quienes se acercan antes de que siquiera sepan que ya los vio. La botella no es solo el arma, es su mensaje: para Johan, matar a alguien puede ser tan simple y tan mundano como un accidente doméstico.`,
      videoUrl: 'https://vimeo.com/1170656573?fl=tl&fe=ec',
      videoId: '', // Reemplazar con video real del momento
    },
    {
      id: 'trauma-nino',
  title: 'El Niño Roto por Johan',
  episode: 'Episodio 49 — "La crueldad extrema"',
  image: 'assets/images/moment2.jpg',
  shortDesc: 'Johan destruye la mente de un niño inocente sin siquiera ensuciarse las manos.',
  fullDesc: `Este episodio es uno de los más perturbadores de toda la serie porque Johan no mata a nadie directamente — y aun así destruye una vida por completo. Un niño que tiene el infortunio de cruzarse con Johan queda marcado de por vida tras el encuentro. Lo que Johan le dice, le muestra o le hace presenciar es suficiente para quebrar su psique de manera irreparable.

Este momento captura perfectamente por qué Johan es un villano diferente a todos los demás. No necesita violencia física para causar daño. Su arma es la palabra, la mirada, la idea que planta en la mente de otros. Con un niño, eso es devastador: una mente en formación no tiene defensas contra alguien como Johan.

La escena funciona también como recordatorio del origen del propio Johan. Él mismo fue un niño sometido a traumas psicológicos en el Kinderheim 511 y a través de los libros de Bonaparta. Al traumatizar a este niño, Johan no está siendo simplemente cruel — está replicando lo que le hicieron a él, como si fuera lo único que conoce. Es uno de los momentos más oscuros y más honestos sobre la naturaleza del ciclo del trauma en toda la serie.`,
  videoUrl: 'https://player.vimeo.com/video/1170656573?badge=0&title=0&byline=0&portrait=0&color=c0392b',
  videoId: '', // Reemplaza con el ID real del clip del episodio 49
    },
    {
      id: 'tenma-choice',
      title: 'La Decisión de Tenma',
      episode: 'Episodio 1 — "Herr Dr. Tenma"',
      image: 'assets/images/moment3.jpg',
      shortDesc: 'Un médico elige salvar al niño en lugar del alcalde. Esta elección cambia todo.',
      fullDesc: `El primer episodio de Monster comienza con una pregunta aparentemente simple pero filosóficamente devastadora: ¿todas las vidas tienen el mismo valor? El Dr. Kenzo Tenma, un brillante neurocirujano japonés en Alemania, está a punto de demostrar que sí lo cree —aunque eso le cueste todo.

Cuando llegan al hospital simultáneamente Johan Liebert (un niño) y el alcalde de la ciudad con heridas graves, el director del hospital ordena a Tenma que opere al alcalde. Tenma desobedece y opera al niño. El alcalde muere. La carrera de Tenma se destruye. Su relación termina.

Pero el niño vive. Y ese niño es Johan.

Esta decisión —tomada por los principios más nobles— desencadena uno de los relatos de consecuencias no intencionales más magistralmente contados en la historia del manga. Tenma nunca abandona su principio: todas las vidas valen lo mismo. Incluso la de un monstruo.`,
      videoUrl: 'https://player.vimeo.com/video/1170656466?badge=0&title=0&byline=0&portrait=0&color=c0392b',
      videoId: '', // Reemplazar con video real del momento
    },
  ];

  constructor(private router: Router) {}

  goToDetail(id: string) {
  window.location.href = `/moment-detail/${id}`;
}
goHome() { window.location.href = '/home'; }
goBack() { window.location.href = '/home'; }
}
