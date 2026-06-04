import { Component, OnInit } from '@angular/core';
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

  constructor(private personagemService: PersonagemService) {}

  ngOnInit(): void {
    this.personagens = this.personagemService.getTodosPersonagens();
  }
  
}
