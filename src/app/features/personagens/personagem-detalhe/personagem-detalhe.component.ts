import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PersonagemService } from '../../../shared/services/personagem';

@Component({
  selector: 'app-personagem-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './personagem-detalhe.component.html',
  styleUrl: './personagem-detalhe.component.scss',
})
export class PersonagemDetalheComponent implements OnInit {

  personagemAtual: any;

  cartaSelecionada: any = null;

 constructor(
  private route: ActivatedRoute,
  private personagemService: PersonagemService
 ){}

 ngOnInit(): void {
  const idDaUrl = this.route.snapshot.paramMap.get('id');

  if(idDaUrl){
    this.personagemAtual = this.personagemService.getPersonagemPorId(idDaUrl);
  }
 }

 abrirCarta(carta: any) {
  this.cartaSelecionada = carta;
 }

 fecharCarta() {
  this.cartaSelecionada = null;
 }
}