import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonagemService } from '../../../shared/services/personagem';

@Component({
  selector: 'app-personagens-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './personagens-list.component.html',
  styleUrl: './personagens-list.component.scss',
})
export class PersonagensListComponent implements OnInit {
  
  personagens: any[] = [];

  constructor(private personagemService: PersonagemService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.personagemService.getTodosPersonagens()

    .subscribe({
      next:(dadosQueChegaramDoJava) => {

        this.personagens = dadosQueChegaramDoJava;
        console.log("Dados do Banco de Dados:", this.personagens);
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Ops, o Spring Boot deve estar desligado!', erro);
      }
    });
  }
  
}
