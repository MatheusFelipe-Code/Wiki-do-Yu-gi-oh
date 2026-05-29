import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reliquias-list',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './reliquias-list.component.html',
  styleUrl: './reliquias-list.component.scss' 
})
export class ReliquiasList {
  // Aqui está a lista "reliquias" que o HTML estava procurando!
  reliquias = [
    {
      id: 'enigma', 
      nome: 'Enigma do Milênio',
      imagem: '/assets/img/itens/MillenniumPuzzle.webp',
      descricaoCurta: 'O artefato mágico pertencente a Yugi Muto que guarda o espírito do Faraó.'
    },
    {
      id: 'olho',
      nome: 'Olho do Milênio',
      imagem: '/assets/img/itens/MilleniumEye.webp',
      descricaoCurta: 'Permite ler mentes e ver almas. Seu usuário mais famoso foi Maximillion Pegasus.'
    },
    {
      id: 'anel',
      nome: 'Anel do Milênio',
      imagem: '/assets/img/itens/MilleniumRing.webp',
      descricaoCurta: 'Guarda um espírito maligno e tem o poder de localizar outros Itens do Milênio.'
    },
    {
      id: 'balanca',
      nome: 'Balança do Milênio',
      imagem: '/assets/img/itens/180px-MilleniumScale.webp',
      descricaoCurta: 'Tem o poder de julgar a alma de uma pessoa, pesando seus pecados.'
    },
    {
      id: 'chave',
      nome: 'Chave do Milênio',
      imagem: '/assets/img/itens/MillenniumKey.webp',
      descricaoCurta: 'Concede o poder de entrar na mente das pessoas e explorar seus pensamentos.'
    },
    {
      id: 'vara',
      nome: 'Vara do Milênio',
      imagem: '/assets/img/itens/180px-MilleniumRod.webp',
      descricaoCurta: 'Controla a mente das pessoas. Seu portador mais conhecido é Marik Ishtar.'
    },
    {
      id: 'colar',
      nome: 'Colar do Milênio',
      imagem: '/assets/img/itens/MillenniumNecklace.webp',
      descricaoCurta: 'Permite ver o futuro e o passado. Usado por Ishizu Ishtar.'
    }
  ];
}