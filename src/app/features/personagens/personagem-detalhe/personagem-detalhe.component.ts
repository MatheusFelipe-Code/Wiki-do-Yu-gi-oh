import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  carregando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private personagemService: PersonagemService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    const idDaUrl = this.route.snapshot.paramMap.get('id');
    console.log("PASSO 1: Entrou na tela. ID da URL:", idDaUrl);

    if(idDaUrl){
      const idNumero = Number(idDaUrl);
      console.log("PASSO 2: Chamando o Spring Boot para o ID:", idNumero);

      this.personagemService.getPersonagemPorId(idNumero)
      .subscribe({
        next: (dadosDoBanco) => {
          this.personagemAtual = dadosDoBanco;
          console.log('PASSO 3: Dados chegaram do Java!', this.personagemAtual);
          
          this.carregando = false;
          this.cdr.detectChanges();
          console.log('PASSO 4: Loading desligado! Carregando =', this.carregando);
        },
        error: (erro) => {
          console.error('PASSO 3 (ERRO): Falha na requisição!', erro);
          this.carregando = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.carregando = false;
    }
  }

  abrirCarta(carta: any) {
    this.cartaSelecionada = carta;
  }

  fecharCarta() {
    this.cartaSelecionada = null;
  }
}