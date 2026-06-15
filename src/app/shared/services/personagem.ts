import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonagemService {

  private personagens = [
    {
      id: 'yami-yugi',
      nome: 'Yami Yugi/ Atem',
      imagem: '/assets/img/personagens/yami yugi.jpg',
      descricaoCurta: 'O espírito do antigo Faraó egípcio que habita o Enigma do Milênio, conhecido como o Rei dos Jogos.',
      monstroPrincipal:'Mago Negro',
      historia: 'Yami Yugi, mais tarde revelado como o antigo Faraó Atem, é um espírito ancestral que selou a própria alma dentro do Enigma do Milênio para salvar o mundo da entidade maligna Zorc Necrophades. Ao ter seu quebra-cabeça montado pelo jovem Yugi Muto milhares de anos depois, ele despertou no mundo moderno sem memórias de seu passado. Inicialmente agindo como um justiceiro sombrio que punia malfeitores com os perigosos "Jogos das Trevas", ele foi gradualmente amolecido pelo coração puro de Yugi. Juntos, eles formam uma parceria imbatível. A jornada principal do Faraó envolve proteger o mundo de novas ameaças místicas, recuperar suas memórias perdidas no antigo Egito e entender o verdadeiro significado da amizade antes de poder, finalmente, descansar em paz.',

      cartas: [
        { nome: 'Mago Negro', imagem: '/assets/img/cartas/Deck do Yami Yugi/Mago Negro Yugioh.png'},
        { nome: 'Rei Caveira', imagem: '/assets/img/cartas/Deck do Yami Yugi/Rei Caveira Yugioh.png'},
        { nome: 'Kuriboh', imagem: '/assets/img/cartas/Deck do Yami Yugi/Kuriboh Yugioh.jpg'},
        { nome: 'Maldicao do Dragao', imagem: '/assets/img/cartas/Deck do Yami Yugi/Maldição do Dragão Yugioh.png'},
        { nome: 'Guardiao Celta', imagem: '/assets/img/cartas/Deck do Yami Yugi/Guardião Celta Yugioh.png'},
        { nome: 'Gaia o Cavaleiro Impetuoso', imagem: '/assets/img/cartas/Deck do Yami Yugi/Gaia o Cavaleiro Impetuoso.jpg'},
        { nome: 'Espadas da Luz Reveladora', imagem: '/assets/img/cartas/Deck do Yami Yugi/Espadas da Luz Reveladora Yugioh.jpg'},
        { nome: 'Gaia o Campeao do Dragao', imagem: '/assets/img/cartas/Deck do Yami Yugi/Gaia o Campeão do Dragão Yugioh.png'},
        { nome: 'Soldado do Lustro Negro', imagem: '/assets/img/cartas/Deck do Yami Yugi/Soldado do Lustro Negro Yugioh.png'},
        { nome: 'Ritual do Lustro Negro', imagem: '/assets/img/cartas/Deck do Yami Yugi/Ritual do Lustro Negro Yugioh.png'},
        { nome: 'Mago do Caos', imagem: '/assets/img/cartas/Deck do Yami Yugi/Mago do Caos das Trevas Yugioh.png'},
        { nome: 'Polimerizacao', imagem: '/assets/img/cartas/Deck do Yami Yugi/Polimerização Yugioh.png'},
        { nome: 'Cartolas Magicas', imagem: '/assets/img/cartas/Deck do Yami Yugi/Cartolas Mágicas Yugioh.png'},
        { nome: 'Caixa Mistica', imagem: '/assets/img/cartas/Deck do Yami Yugi/Caixa Mística Yugioh.png'},
        { nome: 'Monstro que Renasce', imagem: '/assets/img/cartas/Deck do Yami Yugi/Monstro que Renasce Yugioh.png'},
      ]
    },
    {
      id: 'yugi-muto',
      nome: 'Yugi Muto',
      imagem: '/assets/img/personagens/Yugi_muto.webp',
      descricaoCurta: 'O garoto de coração puro que montou o Enigma do Milênio e se tornou o parceiro inseparável do Faraó.',
      monstroPrincipal:'Mago Silencioso / Gandora',
      historia:'Yugi era um garoto tímido e gentil que costumava sofrer bullying na escola. Sua vida mudou completamente quando ele conseguiu montar o antigo artefato egípcio chamado Enigma do Milênio. Ao fazer isso, ele despertou o espírito de um Faraó sem nome. Ao longo de sua jornada, Yugi prova que sua verdadeira força não vem apenas de seu alter-ego sombrio, mas de sua própria bondade, coragem e na crença inabalável no Coração das Cartas e nos laços de amizade.',

      cartas: [
        { nome: 'Mago Silencioso Lv4', imagem: '/assets/img/cartas/Deck do Yugi/Mago Silencioso LV4.avif'},
        { nome: 'Mago Silencioso Lv8', imagem: '/assets/img/cartas/Deck do Yugi/Mago Silencioso LV8.avif'},
        { nome: 'Gandora', imagem: '/assets/img/cartas/Deck do Yugi/Gandora.webp'},
        { nome: 'Alpha Magnet Warrior', imagem: '/assets/img/cartas/Deck do Yugi/Alpha The Magnet Warrior.jpg'},
        { nome: 'Ganma Magnet Warrior', imagem: '/assets/img/cartas/Deck do Yugi/Ganma The Magnet Warrior.jpg'},
        { nome: 'Beta Magnet Warrior', imagem: '/assets/img/cartas/Deck do Yugi/Beta The Magnet Warrior.jpg'},
        { nome: 'Beta The Electromagnet Warrior', imagem: '/assets/img/cartas/Deck do Yugi/Beta The Electromagnet Warrior.jpg'},
        { nome: 'Valkyrion The Magna Warrior', imagem: '/assets/img/cartas/Deck do Yugi/Valkyrion The Magna Warrior.jpg'},
        { nome: 'Mirror Force', imagem: '/assets/img/cartas/Deck do Yugi/Mirror Force.jpg'},
        { nome: 'Magnet Conversion', imagem: '/assets/img/cartas/Deck do Yugi/Magnet Conversion.jpg'},
        { nome: 'Buster Blade', imagem: '/assets/img/cartas/Deck do Yugi/Buster Blade.jpg'},
        { nome: 'Desfusao', imagem: '/assets/img/cartas/Deck do Yugi/Desfusão.jpg'},
        { nome: 'Magic Cylinder', imagem: '/assets/img/cartas/Deck do Yugi/Magic Cylinder.jpg'},
        { nome: 'Magnetic Field', imagem: '/assets/img/cartas/Deck do Yugi/Magnetic Field.jpg'},
        { nome: 'Sword of Revealing', imagem: '/assets/img/cartas/Deck do Yugi/Swords Of Revealing Light.jpg'},

      ]
    },
    {
      id: 'kaiba',
      nome: 'Seto Kaiba',
      imagem: '/assets/img/personagens/Seto_Kaiba.webp',
      descricaoCurta: 'O empresário e duelista orgulhoso que fundou a empresa Kaiba Corp e compete com Yugi pelo título de Rei dos Jogos.',
      monstroPrincipal:'Dragão Branco de Olhos Azuis',
      historia: 'Seto Kaiba é um jovem prodígio que, após a morte de seus pais, foi criado por seu tio. Ele se tornou um gênio dos negócios e fundou a Kaiba Corp, uma empresa de tecnologia de ponta. Kaiba é obcecado por ser o melhor duelista do mundo e vê Yugi como seu maior rival. Apesar de sua arrogância e frieza, Kaiba tem um profundo senso de justiça e um amor complicado por seu irmão mais novo, Mokuba.',

      cartas: [



      ]
    },
    {
      id: 'joey',
      nome: 'Joey Wheeler',
      imagem: '/assets/img/personagens/joey.webp',
      descricaoCurta: 'Um duelista com muita sorte e coragem, que começou como amador e luta com todas as forças pelos amigos.',
      monstroPrincipal:'Dragão Negro de Olhos Vermelhos',
      historia: 'Joey Wheeler é um jovem determinado e leal, que começou como um amador do duelo. Ele é conhecido por sua sorte e coragem, e está sempre disposto a lutar pelos seus amigos, mesmo quando está em desvantagem.',

      cartas: [



      ]
    },
    {
      id: 'tea',
      nome: 'Tea Gardner',
      imagem: '/assets/img/personagens/Tea Gardner.webp',
      descricaoCurta: 'A base emocional da equipe, conhecida por sua lealdade e apoio incondicional aos amigos.',
      monstroPrincipal:'Pequena Maga Negra',
      historia: 'Tea Gardner é uma jovem leal e carinhosa, que sempre está disposta a ajudar seus amigos. Ela é conhecida por sua inteligência e habilidade em prever os movimentos dos oponentes.',


      cartas: [



      ]
    },
    {
      id: 'tristan',
      nome: 'Tristan Taylor',
      imagem: '/assets/img/personagens/Tristan_Taylor.webp',
      descricaoCurta: 'Um amigo leal que, mesmo não sendo um mestre no duelo, sempre arrisca a vida para proteger o grupo.',
      monstroPrincipal:'Comandante do Cibernético',
      historia: 'Tristan Taylor é um amigo leal que, mesmo não sendo um mestre no duelo, sempre arrisca a vida para proteger o grupo.',

      cartas: [



      ]
    },
    {
      id: 'bakura',
      nome: 'Bakura Ryou',
      imagem: '/assets/img/personagens/Bakura Ryou.webp',
      descricaoCurta: 'Um jovem gentil e educado que, infelizmente, adquiriu o perigoso Anel do Milênio.',
      monstroPrincipal:'Mago da Fé',
      historia: 'Bakura Ryou é um jovem gentil e educado que, infelizmente, adquiriu o perigoso Anel do Milênio. Ele é constantemente perseguido por Yami Bakura, o espírito maligno do Ladrão de Túmulos que possui seu corpo. Apesar de sua situação difícil, Bakura é um amigo leal e corajoso, que luta para proteger seus amigos e encontrar uma maneira de se livrar da influência maligna.',

      cartas: [



      ]
    },
    {
      id:'yami-bakura',
      nome: 'Yami Bakura',
      imagem: '/assets/img/personagens/Yami Bakura.jpg',
      descricaoCurta: 'O espírito maligno do Ladrão de Túmulos que possui Bakura, mestre dos Jogos das Trevas.',
      monstroPrincipal:'Necrofear das Trevas',
      historia: 'Yami Bakura é o espírito maligno do Ladrão de Túmulos que possui Bakura Ryou. Ele é um mestre dos Jogos das Trevas e um dos principais antagonistas da série. Yami Bakura é astuto, manipulador e extremamente perigoso, sempre buscando poder e controle sobre os outros.',

      cartas: [



      ]
    },
    {
      id: 'pegasus',
      nome: 'Maximillion Pegasus',
      imagem: '/assets/img/personagens/MaximillionPegasus.webp',
      descricaoCurta: 'O excêntrico criador do Duel Monsters, que usa o Olho do Milênio para manipular os duelos e as pessoas.',
      monstroPrincipal:'Restrição dos Mil Olhos',
      historia: 'Maximillion Pegasus é o excêntrico criador do Duel Monsters, que usa o Olho do Milênio para manipular os duelos e as pessoas.',

      cartas: [



      ]
    },
    {
      id: 'mai',
      nome: 'Mai Valentine',
      imagem: '/assets/img/personagens/Mai Valentine.png',
      descricaoCurta: 'Uma duelista profissional e orgulhosa que usa táticas psicológicas e extrema habilidade no campo.',
      monstroPrincipal:'Irmãs Dama Harpia',
      historia: 'Mai Valentine é uma duelista profissional e orgulhosa que usa táticas psicológicas e extrema habilidade no campo. Ela é conhecida por sua confiança e charme, mas também tem um lado vulnerável que a torna uma personagem complexa e interessante.',

      cartas: [



      ]
    },
    {
      id: 'marik',
      nome: 'Marik Ishtar',
      imagem: '/assets/img/personagens/Marik.webp',
      descricaoCurta: 'O líder dos Ghouls (Caçadores Raros), cuja missão inicial era vingar sua família usando a Vara do Milênio.',
      monstroPrincipal:'Slime Metálico',
      historia: 'Marik Ishtar é o líder dos Ghouls (Caçadores Raros), cuja missão inicial era vingar sua família usando a Vara do Milênio. Ele é um personagem complexo, dividido entre seu desejo de vingança e a influência maligna que o corrompeu, levando-o a se tornar um dos vilões mais aterrorizantes da série.',

      cartas: [



      ]
    },
    {
      id: 'yami-marik',
      nome: 'Yami Marik',
      imagem: '/assets/img/personagens/Yami_marik.webp',
      descricaoCurta: 'A personalidade sádica e cruel nascida do ódio e da dor de Marik, um dos vilões mais aterrorizantes.',
      monstroPrincipal:'Dragão Alado de Ra',
      historia: 'Yami Marik é a personalidade sádica e cruel nascida do ódio e da dor de Marik Ishtar. Ele é um dos vilões mais aterrorizantes da série, conhecido por sua crueldade e desejo insaciável de poder.',

      cartas: [



      ]
    },
    {
      id: 'ishizu',
      nome: 'Ishizu Ishtar',
      imagem: '/assets/img/personagens/Ishizu Ishtar.webp',
      descricaoCurta: 'Irmã de Marik e portadora do Colar do Milênio. Ela prevê o futuro na esperança de salvar o irmão.',
      monstroPrincipal:'Kelber / Mudança de Coração',
      historia: 'Ishizu Ishtar é a irmã de Marik e portadora do Colar do Milênio. Ela tem a habilidade de prever o futuro e usa essa habilidade na esperança de salvar seu irmão da escuridão que o consome.',

      cartas: [



      ]
    },
    {
      id: 'duke',
      nome: 'Duke Devlin',
      imagem: '/assets/img/personagens/DukeDevlin.webp',
      descricaoCurta: 'Um duelista astuto e charmoso, conhecido por seu jogo de cartas de sorte e azar, o "Duel Box".',
      monstroPrincipal:'Orgoth, Implacável',
      historia: 'Duke Devlin é um duelista astuto e charmoso, conhecido por seu jogo de cartas de sorte e azar, o "Duel Box". Ele é uma figura importante na série, conhecido por sua habilidade em manipular as cartas e suas estratégias complexas.',

      cartas: [



      ]
    },
    {
      id:'mokuba',
      nome: 'Mokuba Kaiba',
      imagem: '/assets/img/personagens/Mokuba_Kaiba.webp',
      descricaoCurta: 'O irmão mais novo de Seto Kaiba, que apesar de não ser um duelista, é uma figura importante na vida de seu irmão.',
      monstroPrincipal:'Crocodilo',
      historia: 'Mokuba Kaiba é o irmão mais novo de Seto Kaiba. Apesar de não ser um duelista, ele desempenha um papel importante na vida de seu irmão, sendo uma fonte de apoio e motivação.',

      cartas: [



      ]
    },
    {
      id: 'shadi',
      nome: 'Shadi',
      imagem: '/assets/img/personagens/Shadi.webp',
      descricaoCurta: 'O misterioso guardião dos Itens do Milênio, que testa a alma daqueles que entram no domínio das sombras.',
      monstroPrincipal:'Dragão Milenar',
      historia: 'Shadi é o misterioso guardião dos Itens do Milênio, que testa a alma daqueles que entram no domínio das sombras.',

      cartas: [



      ]
    }
  ];

  constructor() { }

  getTodosPersonagens() {
    return this.personagens;
  }

  getPersonagemPorId(id: string) {
    return this.personagens.find(p => p.id === id);
  }
}
