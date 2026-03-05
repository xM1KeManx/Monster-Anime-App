import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { CharactersPage } from './pages/characters/characters.page';
import { CharacterDetailPage } from './pages/character-detail/character-detail.page';
import { MomentsPage } from './pages/moments/moments.page';
import { MomentDetailPage } from './pages/moment-detail/moment-detail.page';
import { AboutPage } from './pages/about/about.page';
import { MyStoryPage } from './pages/my-story/my-story.page';
import { HireMePage } from './pages/hire-me/hire-me.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomePage },
  { path: 'characters', component: CharactersPage },
  { path: 'character-detail/:id', component: CharacterDetailPage },
  { path: 'moments', component: MomentsPage },
  { path: 'moment-detail/:id', component: MomentDetailPage },
  { path: 'about', component: AboutPage },
  { path: 'my-story', component: MyStoryPage },
  { path: 'hire-me', component: HireMePage },
];