import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ProductsComponent } from './components/products/products.component';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin/admin.component').then(c => c.AdminComponent),
        canActivate: [authGuard, roleGuard],
        data: { expectedRole: 'ADMIN' }
    }
];