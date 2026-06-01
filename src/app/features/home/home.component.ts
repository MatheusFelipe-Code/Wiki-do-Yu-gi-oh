import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  indiceAtual: number = 0;
  totalItens : number = 3;
  intervalo: any;

  ngOnInit() {
    this.iniciarCarrossel();
  }

  ngOnDestroy() {
    this.pararCarrossel();
  }

  iniciarCarrossel() {

    this.intervalo =setInterval(() => {
      this.proximoSlide();
    }, 4000);
  }

  pararCarrossel(){
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  proximoSlide() {
    this.indiceAtual = (this.indiceAtual + 1) % this.totalItens;
  }

  slideAnterior() {
    this.indiceAtual = (this.indiceAtual - 1 + this.totalItens) % this.totalItens;
  }
} 