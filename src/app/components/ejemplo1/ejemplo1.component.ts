import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ejemplo1',
  imports: [CardModule, ButtonModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component {
  conteoConSenal = signal<number>(0);
  conteoSinSenal =0;

  decrementarConteo(){
    this.conteoSinSenal = this.conteoSinSenal - 1;
    this.conteoConSenal.update( (valor) => valor - 1);
  }
  incrementarConteo(){
    this.conteoSinSenal = this.conteoSinSenal + 1;
    this.conteoConSenal.update( (valor) => valor + 1);
  }
}
