import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  contador = 0;
  totalItens = 3;
  intervalo: any;

  ngOnInit() {
    this.iniciarCarrossel();
  }

  ngOnDestroy() {
    this.pararCarrossel();
  }

  iniciarCarrossel() {

    this.intervalo =setInterval(() => {
      this.moverProximo();
    }, 4000);
  }

  pararCarrossel(){
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  moverProximo() {
    if (this.contador < this.totalItens -1) {
      this.contador++;
    } else {
      this.contador = 0;
    }
  }

  moverAnterior() {
    if (this.contador > 0) {
      this.contador--;
    } else {
      this.contador = this.totalItens -1;
    }
  }
}
