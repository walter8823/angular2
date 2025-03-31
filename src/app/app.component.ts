import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { MenuComponent } from './core/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, ButtonModule, MenuComponent, HttpClientModule, TableModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularSignals';
}