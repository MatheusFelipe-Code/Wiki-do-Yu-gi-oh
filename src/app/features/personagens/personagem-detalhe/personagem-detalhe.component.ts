import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-personagem-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './personagem-detalhe.component.html',
  styleUrl: './personagem-detalhe.component.scss',
})
export class PersonagemDetalheComponent implements OnInit {

  personagemAtual: any;

  personagens = [
    {
      id: 'yami-yugi',
      nome: 'Yami Yugi/ Atem',
      imagem: '/assets/img/personagens/yami yugi.jpg',
      descricaoCurta: 'O espírito do antigo Faraó egípcio que habita o Enigma do Milênio, conhecido como o Rei dos Jogos.',
      monstroPrincipal:'Mago Negro'
    },
    {
      id: 'yugi-muto',
      nome: 'Yugi Muto',
      imagem: '/assets/img/personagens/Yugi_muto.webp',
      descricaoCurta: 'O garoto de coração puro que montou o Enigma do Milênio e se tornou o parceiro inseparável do Faraó.',
      monstroPrincipal:'Mago Silencioso / Gandora'
    },
    {
      id: 'kaiba',
      nome: 'Seto Kaiba',
      imagem: '/assets/img/personagens/Seto_Kaiba.webp',
      descricaoCurta: 'O empresário e duelista orgulhoso que fundou a empresa Kaiba Corp e compete com Yugi pelo título de Rei dos Jogos.',
      monstroPrincipal:'Dragão Branco de Olhos Azuis'
    },
    {
      id: 'joey',
      nome: 'Joey Wheeler',
      imagem: '/assets/img/personagens/joey.webp',
      descricaoCurta: 'Um duelista com muita sorte e coragem, que começou como amador e luta com todas as forças pelos amigos.',
      monstroPrincipal:'Dragão Negro de Olhos Vermelhos'
    },
    {
      id: 'tea',
      nome: 'Tea Gardner',
      imagem: '/assets/img/personagens/Tea Gardner.webp',
      descricaoCurta: 'A base emocional da equipe, conhecida por sua lealdade e apoio incondicional aos amigos.',
      monstroPrincipal:'Pequena Maga Negra'
    },
    {
      id: 'tristan',
      nome: 'Tristan Taylor',
      imagem: '/assets/img/personagens/Tristan_Taylor.webp',
      descricaoCurta: 'Um amigo leal que, mesmo não sendo um mestre no duelo, sempre arrisca a vida para proteger o grupo.',
      monstroPrincipal:'Comandante do Cibernético'
    },
    {
      id: 'bakura',
      nome: 'Bakura Ryou',
      imagem: '/assets/img/personagens/Bakura Ryou.webp',
      descricaoCurta: 'Um jovem gentil e educado que, infelizmente, adquiriu o perigoso Anel do Milênio.',
      monstroPrincipal:'Mago da Fé'
    },
    {
      id:'yami-bakura',
      nome: 'Yami Bakura',
      imagem: '/assets/img/personagens/Yami Bakura.jpg',
      descricaoCurta: 'O espírito maligno do Ladrão de Túmulos que possui Bakura, mestre dos Jogos das Trevas.',
      monstroPrincipal:'Necrofear das Trevas'
    },
    {
      id: 'pegasus',
      nome: 'Maximillion Pegasus',
      imagem: '/assets/img/personagens/MaximillionPegasus.webp',
      descricaoCurta: 'O excêntrico criador do Duel Monsters, que usa o Olho do Milênio para manipular os duelos e as pessoas.',
      monstroPrincipal:'Restrição dos Mil Olhos'
    },
    {
      id: 'mai',
      nome: 'Mai Valentine',
      imagem: '/assets/img/personagens/Mai Valentine.png',
      descricaoCurta: 'Uma duelista profissional e orgulhosa que usa táticas psicológicas e extrema habilidade no campo.',
      monstroPrincipal:'Irmãs Dama Harpia'
    },
    {
      id: 'marik',
      nome: 'Marik Ishtar',
      imagem: '/assets/img/personagens/Marik.webp',
      descricaoCurta: 'O líder dos Ghouls (Caçadores Raros), cuja missão inicial era vingar sua família usando a Vara do Milênio.',
      monstroPrincipal:'Slime Metálico'
    },
    {
      id: 'yami-marik',
      nome: 'Yami Marik',
      imagem: '/assets/img/personagens/Yami_marik.webp',
      descricaoCurta: 'A personalidade sádica e cruel nascida do ódio e da dor de Marik, um dos vilões mais aterrorizantes.',
      monstroPrincipal:'Dragão Alado de Ra'
    },
    {
      id: 'ishizu',
      nome: 'Ishizu Ishtar',
      imagem: '/assets/img/personagens/Ishizu Ishtar.webp',
      descricaoCurta: 'Irmã de Marik e portadora do Colar do Milênio. Ela prevê o futuro na esperança de salvar o irmão.',
      monstroPrincipal:'Kelber / Mudança de Coração'
    },
    {
      id: 'duke',
      nome: 'Duke Devlin',
      imagem: '/assets/img/personagens/DukeDevlin.webp',
      descricaoCurta: 'Um duelista astuto e charmoso, conhecido por seu jogo de cartas de sorte e azar, o "Duel Box".',
      monstroPrincipal:'Orgoth, Implacável'
    },
    {
      id:'mokuba',
      nome: 'Mokuba Kaiba',
      imagem: '/assets/img/personagens/Mokuba_Kaiba.webp',
      descricaoCurta: 'O irmão mais novo de Seto Kaiba, que apesar de não ser um duelista, é uma figura importante na vida de seu irmão.',
      monstroPrincipal:'Crocodilo'
    },
    {
      id: 'shadi',
      nome: 'Shadi',
      imagem: '/assets/img/personagens/Shadi.webp',
      descricaoCurta: 'O misterioso guardião dos Itens do Milênio, que testa a alma daqueles que entram no domínio das sombras.',
      monstroPrincipal:'Dragão Milenar'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idDaUrl = this.route.snapshot.paramMap.get('id');
    this.personagemAtual = this.personagens.find(p => p.id === idDaUrl);
  }
}
