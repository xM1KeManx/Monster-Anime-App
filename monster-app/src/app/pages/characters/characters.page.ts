// src/app/pages/characters/characters.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
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

@Component({
  selector: 'app-characters',
  templateUrl: 'characters.page.html',
  styleUrls: ['characters.page.scss'],
  standalone: true,
  imports: [
    NgFor, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton,
  ],
})
export class CharactersPage {
  characters: Character[] = [
    {
      id: 'johan',
      name: 'Johan Liebert',
      role: 'El Monstruo',
      shortDesc: 'Un asesino en serie de inteligencia sobrehumana cuya sonrisa esconde el vacío más absoluto.',
      image: 'assets/images/johan.jpg',
      tags: ['Antagonista', 'Genio'],
      fullDesc: `Johan Liebert es el antagonista principal de Monster. Nacido junto a su gemela Anna (Nina) bajo circunstancias misteriosas durante el régimen comunista de Europa del Este, Johan fue sometido a experimentos psicológicos en su infancia que borraron su sentido de identidad y humanidad. Es considerado uno de los villanos más perturbadores del manga y el anime, no porque cometa actos brutales de manera explícita, sino porque su capacidad para manipular a otros hacia la autodestrucción lo convierte en algo más terrorífico que cualquier monstruo físico.

Su apariencia angelical contrasta con una mente que opera más allá de la moral convencional. Johan cree genuinamente que no tiene un "yo" verdadero, y por eso busca en ocasiones su propia aniquilación, aunque primero quiere ver el fin del mundo.`,
      age: '~20 años',
      nationality: 'Checoslovaco',
      quote: '"El fin del mundo es solo el comienzo."',
    },
    {
      id: 'grimmer',
      name: 'Wolfgang Grimmer',
      role: 'Ex Agente',
      shortDesc: 'Un hombre que perdió su capacidad de sentir emociones, pero que busca recuperar su humanidad.',
      image: 'assets/images/grimmer.jpg',
      tags: ['Secundario', 'Trágico'],
      fullDesc: `Wolfgang Grimmer es uno de los personajes más queridos por los fans de Monster. Fue uno de los niños criados en el orfanato Kinderheim 511, donde se le enseñó a suprimir toda emoción para convertirse en el agente perfecto. Como resultado, Grimmer literalmente no puede llorar ni sentir emociones de manera normal, aunque profundamente desea recuperar esa humanidad.

A pesar de su pasado oscuro, Grimmer mantiene un código de honor muy claro y una disposición genuinamente amable. Su alter ego, "El Magnifico Steiner", emerge en situaciones de peligro extremo: un estado de combate donde toda emoción desaparece y se convierte en una máquina de lucha. Su arco narrativo es uno de los más emotivos de la serie, culminando en uno de los momentos más llantosos del anime.`,
      age: '~35 años',
      nationality: 'Checo/Alemán',
      quote: '"Me gustaría poder llorar. Pero parece que olvidé cómo hacerlo."',
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
      shortDesc: 'El brillante neurocirujano que salvó a Johan y desde entonces carga con esa culpa, persiguiéndolo.',
      image: 'assets/images/tenma.jpg',
      tags: ['Protagonista', 'Moral'],
      fullDesc: `El Dr. Kenzo Tenma es el protagonista de Monster. Médico japonés de excepcional talento que trabaja en un hospital de Frankfurt, Alemania. Su vida cambia para siempre cuando decide salvar la vida de un niño herido —Johan— en lugar de operar al alcalde de la ciudad, como le habían ordenado. Esta decisión cuesta la vida a los pacientes de mayor rango y destruye su carrera, pero Tenma la toma por principio: todas las vidas tienen el mismo valor.

Años después descubre que el niño que salvó se ha convertido en un asesino en serie, y se ve obligado a perseguirlo para enmendar lo que considera su error. A lo largo de la serie, Tenma enfrenta la pregunta filosófica que subyace en toda la obra: ¿puede un médico convertirse en asesino, aunque sea para salvar vidas?`,
      age: '~33 años',
      nationality: 'Japonés',
      quote: '"Todas las vidas tienen el mismo valor."',
    },
    {
      id: 'nina',
      name: 'Anna / Nina Fortner',
      role: 'La Gemela',
      shortDesc: 'Hermana gemela de Johan, portadora de memorias suprimidas que son clave para resolver el misterio.',
      image: 'assets/images/nina.jpg',
      tags: ['Secundaria', 'Enigmática'],
      fullDesc: `Anna Liebert, adoptada como Nina Fortner, es la hermana gemela de Johan. A diferencia de su hermano, Anna fue adoptada por una familia amorosa y creció sin recordar los traumas de su infancia. Sin embargo, los recuerdos suprimidos la persiguen en forma de pesadillas y flashbacks que poco a poco revelan la verdad sobre su pasado y el de Johan.

Nina es un personaje de gran fuerza interior. A medida que recupera sus memorias, debe lidiar con una verdad devastadora sobre su relación con Johan y sobre quién era realmente antes de ser "Nina". Es ella quien posee las piezas clave para entender qué convirtió a Johan en lo que es, y su viaje de autoconocimiento es uno de los más impactantes de la serie.`,
      age: '~20 años',
      nationality: 'Checa/Alemana',
      quote: '"Necesito saber quién soy realmente."',
    },
  ];

  constructor(private router: Router) {}

  goToDetail(id: string) {
    window.location.href = `/character-detail/${id}`;
  }

  goHome() {
    window.location.href = '/home';
  }

  goBack() {
    window.location.href = '/home';
  }
}
