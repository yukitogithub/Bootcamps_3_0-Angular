import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/posts/create/create.component';
import { EditComponent } from './components/posts/edit/edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'posts', children: [
        { path: 'create', component: CreateComponent },
        { path: 'edit/:id', component: EditComponent }
    ]}
];
