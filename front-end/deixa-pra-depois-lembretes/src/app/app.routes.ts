import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MuralComponent } from './pages/mural/mural.component';
import { PostItFormComponent } from './pages/post-it-form/post-it-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mural', component: MuralComponent },
    { path: 'novo', component: PostItFormComponent },
    { path: 'editar/:id', component: PostItFormComponent }
];
