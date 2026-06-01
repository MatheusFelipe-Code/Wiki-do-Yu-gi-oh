import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reliquia-detalhe',
  imports: [CommonModule, RouterModule],
  templateUrl: './reliquia-detalhe.component.html',
  styleUrl: './reliquia-detalhe.component.scss',
})
export class ReliquiaDetalheComponent implements OnInit {
  reliquiaAtual: any;

  todasReliquias = [
    {
      id: 'enigma',
      nome: 'Enigma do Milênio',
      imagem: '/assets/img/itens/MillenniumPuzzle.webp',
      descricao: 'Permite ao portador acessar os pensamentos e memórias de outras pessoas, além de conceder habilidades como a leitura de mentes e a manipulação de almas.',
    },
    {
      id: 'olho',
      nome: 'Olho do Milênio',
      imagem: '/assets/img/itens/MilleniumEye.webp',
      descricao: 'Permite ao portador ler os pensamentos e ver através dos olhos de outras pessoas, além de conceder habilidades como a detecção de mentiras e a manipulação de almas.',
    },
    {
      id: 'anel',
      nome: 'Anel do Milênio',
      imagem: '/assets/img/itens/MilleniumRing.webp',
      descricao: 'Permite ao portador controlar os outros e acessar o poder dos monstros do submundo, além de conceder habilidades como a manipulação de almas e a invocação de monstros.',
    },
    {
      id: 'chave',
      nome: 'Chave do Milênio',
      imagem: '/assets/img/itens/MillenniumKey.webp',
      descricao: 'Permite ao portador acessar o poder dos monstros do submundo e controlar os outros, além de conceder habilidades como a manipulação de almas e a invocação de monstros.',
    },
    {
      id : 'balanca',
      nome: 'Balança do Milênio',
      imagem: '/assets/img/itens/180px-MilleniumScale.webp',
      descricao: 'Permite ao portador medir a força de outras pessoas e determinar se elas são boas ou más, além de conceder habilidades como a manipulação de almas e a invocação de monstros.',
    },
    {
      id: 'vara',
      nome: 'Vara do Milênio',
      imagem: '/assets/img/itens/180px-MilleniumRod.webp',
      descricao: 'Permite ao portador controlar os outros e acessar o poder dos monstros do submundo, além de conceder habilidades como a manipulação de almas e a invocação de monstros.',
    },
    {
      id: 'colar',
      nome: 'Colar do Milênio',
      imagem: '/assets/img/itens/MillenniumNecklace.webp',
      descricao: 'Permite ao portador acessar o poder dos monstros do submundo e controlar os outros, além de conceder habilidades como a manipulação de almas e a invocação de monstros.',
    }
   ];
    
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idDaUrl = this.route.snapshot.paramMap.get('id');
    this.reliquiaAtual = this.todasReliquias.find(reliquia => reliquia.id === idDaUrl);
  }
}
