import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DeckDetailComponent } from './catalog/deck-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Dogo Group' },
  { path: 'explorar/:id', component: DeckDetailComponent, title: 'Mazo | Dogo Group' },
  { path: 'explorar', component: CatalogComponent, title: 'Explorar mazos | Dogo Group' },
  { path: 'ninos', component: CatalogComponent, data: { line: 'children' }, title: 'Niños | Dogo Group' },
  { path: 'adultos', component: CatalogComponent, data: { line: 'adults' }, title: 'Adultos | Dogo Group' },
  { path: 'examenes', component: CatalogComponent, data: { line: 'exams' }, title: 'Exámenes | Dogo Group' },
  { path: '**', redirectTo: '' },
];