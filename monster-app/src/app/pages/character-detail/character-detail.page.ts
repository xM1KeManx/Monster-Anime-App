import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonButton,
} from '@ionic/angular/standalone';

export interface Character {
  id: string;
  name: string;
  role: string;
  shortDesc: string;
  image: string;
  tags: string[];
  fullDesc: string;
  age: string;
  nationality: string;
  quote: string;
}

const CHARACTERS: Character[] = [
  {
    id: 'johan',
    name: 'Johan Liebert',
    role: 'El Monstruo',
    shortDesc: 'Un asesino en serie de inteligencia sobrehumana.',
    image: 'assets/images/johan.jpg',
    tags: ['Antagonista', 'Genio'],
    fullDesc: `Johan Liebert es el antagonista principal de Monster. Nacido junto a su gemela Anna bajo circunstancias misteriosas durante el régimen comunista de Europa del Este, fue sometido a experimentos psicológicos en su infancia que borraron su sentido de identidad y humanidad.

Su apariencia angelical contrasta con una mente que opera más allá de la moral convencional. Johan cree que no tiene un yo verdadero, y busca en ocasiones su propia aniquilación, aunque primero quiere ver el fin del mundo.`,
    age: '~20 años',
    nationality: 'Checoslovaco',
    quote: 'El fin del mundo es solo el comienzo.',
  },
  {
    id: 'grimmer',
    name: 'Wolfgang Grimmer',
    role: 'Ex Agente',
    shortDesc: 'Un hombre que perdió su capacidad de sentir emociones.',
    image: 'assets/images/grimmer.jpg',
    tags: ['Secundario', 'Trágico'],
    fullDesc: `Wolfgang Grimmer fue uno de los niños criados en el orfanato Kinderheim 511, donde se le enseñó a suprimir toda emoción. Como resultado, literalmente no puede llorar ni sentir emociones de manera normal.

A pesar de su pasado, Grimmer mantiene un código de honor claro. Su alter ego El Magnifico Steiner emerge en situaciones de peligro extremo. Su arco narrativo culmina en uno de los momentos más emotivos del anime.`,
    age: '~35 años',
    nationality: 'Checo/Alemán',
    quote: 'Me gustaría poder llorar. Pero parece que olvidé cómo hacerlo.',
  },
  {
  id: 'martin',
  name: 'Martin',
  role: 'Guardaespaldas de Eva',
  shortDesc: 'El leal guardaespaldas de Eva Heinemann que dio su vida para protegerla sin dudarlo.',
  image: 'assets/images/martin.jpg',
  tags: ['Secundario', 'Leal'],
  fullDesc: `Martin es el guardaespaldas personal de Eva Heinemann, la ex prometida del Dr. Tenma. A pesar de que Eva es una mujer difícil, caprichosa y en ocasiones cruel con quienes la rodean, Martin le profesa una lealtad absoluta e incondicional que va mucho más allá de su deber profesional.

Lo que hace a Martin un personaje memorable no es la cantidad de tiempo en pantalla sino la contundencia de su acto final. Cuando la vida de Eva se ve en peligro, Martin no lo duda ni un segundo — se interpone y da su vida para protegerla. Sin dramatismo innecesario, sin grandes discursos. Solo la acción silenciosa de alguien que decidió que la vida de esa persona valía más que la suya.

Su muerte es uno de los momentos que mejor ilustran el impacto que Johan tiene en las personas a su alrededor. No muere a manos de Johan directamente, sino como consecuencia del caos y la violencia que Johan desata en la vida de todos los que toca. Martin se convierte así en otra víctima del monstruo, y su sacrificio cambia profundamente a Eva.`,
  age: 'Adulto',
  nationality: 'Alemán',
  quote: 'Mi trabajo es protegerla. Eso es todo.',
},
  {
    id: 'tenma',
    name: 'Kenzo Tenma',
    role: 'El Persecutor',
    shortDesc: 'El brillante neurocirujano que salvó a Johan y carga con esa culpa.',
    image: 'assets/images/tenma.jpg',
    tags: ['Protagonista', 'Moral'],
    fullDesc: `El Dr. Kenzo Tenma es el protagonista de Monster. Su vida cambia cuando decide salvar la vida de Johan en lugar del alcalde de la ciudad. Esta decisión destruye su carrera pero define su carácter.

Años después descubre que el niño que salvó se convirtió en asesino, y se ve obligado a perseguirlo. Tenma nunca abandona su principio: todas las vidas valen lo mismo.`,
    age: '~33 años',
    nationality: 'Japonés',
    quote: 'Todas las vidas tienen el mismo valor.',
  },
  {
    id: 'nina',
    name: 'Anna / Nina Fortner',
    role: 'La Gemela',
    shortDesc: 'Hermana gemela de Johan, portadora de memorias clave.',
    image: 'assets/images/nina.jpg',
    tags: ['Secundaria', 'Enigmática'],
    fullDesc: `Anna Liebert, adoptada como Nina Fortner, es la hermana gemela de Johan. Creció sin recordar los traumas de su infancia, pero los recuerdos suprimidos la persiguen en pesadillas.

Nina posee las piezas clave para entender qué convirtió a Johan en lo que es. Su viaje de autoconocimiento es uno de los más impactantes de la serie.`,
    age: '~20 años',
    nationality: 'Checa/Alemana',
    quote: 'Necesito saber quién soy realmente.',
  },
];

@Component({
  selector: 'app-character-detail',
  templateUrl: 'character-detail.page.html',
  styleUrls: ['character-detail.page.scss'],
  standalone: true,
  imports: [
    NgFor, NgIf, RouterLink, UpperCasePipe,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton,
  ],
})
export class CharacterDetailPage implements OnInit {
  character: Character | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.character = CHARACTERS.find(c => c.id === id);
  }

  getDescParagraphs(): string[] {
    if (!this.character) return [];
    return this.character.fullDesc.split('\n\n').filter(p => p.trim().length > 0);
  }

  goHome() { window.location.href = '/home'; }
  goBack() { window.location.href = '/characters'; }
}