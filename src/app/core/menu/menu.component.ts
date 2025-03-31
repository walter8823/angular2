import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  imports: [Menubar],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home'
      },
      {
          label: 'ejemplo de señales',
          icon: 'pi pi-star',
          items: [
            {
              label: 'Ejemplo1',
              icon: 'pi pi-wave-pulse',
              routerLink: 'ejemplo1'
            },
            {
              label: 'Ejemplo2',
              icon: 'pi pi-wave-pulse',
              routerLink: 'ejemplo2'
            },
            {
              label: 'Ejemplo3',
              icon: 'pi pi-wave-pulse',
              routerLink: 'ejemplo3'
            },
            {
              label: 'Ejemplo4',
              icon: 'pi pi-wave-pulse',
              routerLink: 'ejemplo4'
            },
            {
              label: 'Ejemplo5',
              icon: 'pi pi-wave-pulse',
              routerLink: 'ejemplo5'
            },
            {
              label: 'Ejemplo6',
              icon: 'pi pi-wave-pulse',
              routerLink: 'ejemplo6'
            },
            {
              label: 'Ejemplo7',
              icon: 'pi pi-wave-pulse',
              routerLink: 'ejemplo7'
            },
            {
              label: 'Carrito de compras',
              icon: 'pi pi-wave-pulse',
              routerLink: 'cart'
            },
            {
              label: 'menu back',
              icon: 'pi pi-wave-pulse',
              routerLink: 'productos-back'
            }
            
            
          ]
      },
      
  ]
  }

}
