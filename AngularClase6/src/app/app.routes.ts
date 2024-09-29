import { Routes } from '@angular/router';
import { CreateComponent } from './components/posts/create/create.component';
import { EditComponent } from './components/posts/edit/edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'posts/create', pathMatch: 'full' },
    { path: 'posts', children: [
        { path: 'create', component: CreateComponent },
        { path: 'edit/:id', component: EditComponent }
    ]}
];
