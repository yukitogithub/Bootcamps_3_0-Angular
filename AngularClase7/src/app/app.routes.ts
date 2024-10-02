import { Routes } from '@angular/router';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { AngularBootstrapComponent } from './components/angular-bootstrap/angular-bootstrap.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { TailwindcssComponent } from './components/tailwindcss/tailwindcss.component';

export const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'angular-bootstrap', component: AngularBootstrapComponent },
    { path: 'angular-material', component: AngularMaterialComponent },
    { path: 'tailwind', component: TailwindcssComponent },
];