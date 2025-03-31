import { Routes } from '@angular/router';
import { ProductosBackComponent } from './components/productos-back/productos-back.component';

export const routes: Routes = [
    {
        path: 'ejemplo1',
        loadComponent: () => import ('./components/ejemplo1/ejemplo1.component').then( c => c.Ejemplo1Component)
    },
    {
        path: 'ejemplo2',
        loadComponent: () => import ('./components/ejemplo2/ejemplo2.component').then( c => c.Ejemplo2Component)
    },
    {
        path: 'ejemplo3',
        loadComponent: () => import ('./components/ejemplo3/ejemplo3.component').then( c => c.Ejemplo3Component)
    }, 
    {
        path: 'ejemplo4',
        loadComponent: () => import ('./components/ejemplo4/ejemplo4.component').then( c => c.Ejemplo4Component)
    },
    {
        path: 'ejemplo5',
        loadComponent: () => import ('./components/ejemplo5/ejemplo5.component').then( c => c.Ejemplo5Component)
    },
    {
        path: 'ejemplo6',
        loadComponent: () => import ('./components/ejemplo6/ejemplo6.component').then( c => c.Ejemplo6Component)
    },
    {
        path: 'ejemplo7',
        loadComponent: () => import ('./components/ejemplo7/ejemplo7.component').then( c => c.Ejemplo7Component)
    },
    {
        path: 'cart',
        loadComponent: () => import ('./components/cart/cart.component').then( c => c.CartComponent)
    },
    {
        path: 'productos-back',
        loadComponent: () => import ('./components/productos-back/productos-back.component').then( c => c.ProductosBackComponent)
    }
];
