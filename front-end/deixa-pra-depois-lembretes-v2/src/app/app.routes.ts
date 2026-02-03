import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MuralPostItsComponent } from './pages/mural-post-its/mural-post-its.component';
import { NovoPostItComponent } from './pages/novo-post-it/novo-post-it.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post-its', component: MuralPostItsComponent },
  { path: 'novo-post-it', component: NovoPostItComponent },
  { path: 'editar-post-it/:id', component: NovoPostItComponent }
];


