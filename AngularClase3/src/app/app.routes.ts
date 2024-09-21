import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', children: 
        [
            { path: '', component: ProductsComponent },
            { path: 'edit/:id', component: ProductEditComponent },
            { path: 'detail/:[id]', component: ProductDetailComponent }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];