package YuGiOh.yugioh_api.config;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import YuGiOh.yugioh_api.model.Carta;
import YuGiOh.yugioh_api.model.Personagem;
import YuGiOh.yugioh_api.repository.PersonagemRepository;

@Configuration
public class TestConfig implements CommandLineRunner {

  @Autowired
  private PersonagemRepository personagemRepository;

  @Override
  public void run(String... args) throws Exception {

    Personagem yugi = new Personagem();
    yugi.setNome("Yugi Muto");
    yugi.setDescricaoCurta("O Rei dos Jogos.");
    yugi.setMonstroPrincipal("Gandora");
    yugi.setImagemUrl("/assets/img/personagens/Yugi_muto.webp");
    yugi.setHistoria("Yugi era um garoto tímido que resolveu o Enigma do Milênio...");


    Personagem kaiba = new Personagem();
    kaiba.setNome("Seto Kaiba");
    kaiba.setDescricaoCurta("O CEO da KaibaCorp.");
    kaiba.setMonstroPrincipal("Dragão Branco de Olhos Azuis");
    kaiba.setImagemUrl("/assets/img/personagens/Seto_Kaiba.webp");
    kaiba.setHistoria("Kaiba é um gênio arrogante e o maior rival de Yugi...");

    Personagem yamiYugi = new Personagem();
    yamiYugi.setNome("Yami Yugi");
    yamiYugi.setDescricaoCurta("O Faraó");
    yamiYugi.setMonstroPrincipal("Mago Negro");
    yamiYugi.setImagemUrl("/assets/img/personagens/yami yugi.jpg");
    yamiYugi.setHistoria("Faraó o duelista Supremo");

    Carta magoNegro = new Carta();
    magoNegro.setNome("Mago Negro");
    magoNegro.setImagem("/assets/img/cartas/Deck do Yami Yugi/Mago Negro Yugioh.png");
    magoNegro.setPersonagem(yamiYugi);

    yugi.getCartas().addAll(Arrays.asList(magoNegro));

    Personagem joey = new Personagem();
    joey.setNome("Joey Wheeler");
    joey.setDescricaoCurta("");
    joey.setMonstroPrincipal("Dragão Negro de Olhos Vermelhos");
    joey.setImagemUrl("/assets/img/personagens/joey.webp");
    joey.setHistoria("");

    Personagem tristan = new Personagem();
    tristan.setNome("Tristan Taylor");
    tristan.setDescricaoCurta("");
    tristan.setMonstroPrincipal("Comandante Cibernético");
    tristan.setImagemUrl("/assets/img/personagens/Tristan_Taylor.webp");
    tristan.setHistoria("");

    Personagem tea = new Personagem();
    tea.setNome("Tea Gardner");
    tea.setDescricaoCurta("");
    tea.setMonstroPrincipal("Pequena Maga Negra");
    tea.setImagemUrl("/assets/img/personagens/Tea Gardner.webp");
    tea.setHistoria("");

    Personagem maiValentine = new Personagem();
    maiValentine.setNome("Mai Valentine");
    maiValentine.setDescricaoCurta("");
    maiValentine.setMonstroPrincipal("Harpia");
    maiValentine.setImagemUrl("/assets/img/personagens/Mai Valentine.png");
    maiValentine.setHistoria("");

    Personagem marik = new Personagem();
    marik.setNome("Marik");
    marik.setDescricaoCurta("");
    marik.setMonstroPrincipal("O Dragão Alado de Rá");
    marik.setImagemUrl("/assets/img/personagens/Marik.webp");
    marik.setHistoria("");

    Personagem bakura = new Personagem();
    bakura.setNome("Bakura Ryou");
    bakura.setDescricaoCurta("");
    bakura.setMonstroPrincipal("Troca de Corações");
    bakura.setImagemUrl("/assets/img/personagens/Bakura Ryou.webp");
    bakura.setHistoria("");

    Personagem mokuba = new Personagem();
    mokuba.setNome("Mokuba Kaiba");
    mokuba.setDescricaoCurta("");
    mokuba.setMonstroPrincipal("Hambúrguer Faminto");
    mokuba.setImagemUrl("/assets/img/personagens/Mokuba_Kaiba.webp");
    mokuba.setHistoria("");

    Personagem yamiBakura = new Personagem();
    yamiBakura.setNome("Yami Bakura");
    yamiBakura.setDescricaoCurta("");
    yamiBakura.setMonstroPrincipal("Necrofear das Trevas");
    yamiBakura.setImagemUrl("/assets/img/personagens/Yami Bakura.jpg");
    yamiBakura.setHistoria("");

    Personagem yamiMarik = new Personagem();
    yamiMarik.setNome("Yami Marik");
    yamiMarik.setDescricaoCurta("");
    yamiMarik.setMonstroPrincipal("Golem de Lava");
    yamiMarik.setImagemUrl("/assets/img/personagens/Yami_marik.webp");
    yamiMarik.setHistoria("");

    Personagem shadi = new Personagem();
    shadi.setNome("Shadi");
    shadi.setDescricaoCurta("");
    shadi.setMonstroPrincipal("Golem do Milênio");
    shadi.setImagemUrl("/assets/img/personagens/Shadi.webp");
    shadi.setHistoria("");

    Personagem maximillionPegasus = new Personagem();
    maximillionPegasus.setNome("Maximillion Pegasus.");
    maximillionPegasus.setDescricaoCurta("");
    maximillionPegasus.setMonstroPrincipal("Renunciado");
    maximillionPegasus.setImagemUrl("/assets/img/personagens/MaximillionPegasus.webp");
    maximillionPegasus.setHistoria("");

    Personagem dukeDevlin = new Personagem();
    dukeDevlin.setNome("Duke Devlin");
    dukeDevlin.setDescricaoCurta("");
    dukeDevlin.setMonstroPrincipal("Orgoth, o Implacável");
    dukeDevlin.setImagemUrl("/assets/img/personagens/DukeDevlin.webp");
    dukeDevlin.setHistoria("");

    Personagem ishizuIshtar = new Personagem();
    ishizuIshtar.setNome("Ishizu Ishtar");
    ishizuIshtar.setDescricaoCurta("");
    ishizuIshtar.setMonstroPrincipal("Zolga");
    ishizuIshtar.setImagemUrl("/assets/img/personagens/Ishizu Ishtar.webp");
    ishizuIshtar.setHistoria("");






    personagemRepository.saveAll(Arrays.asList(yugi, kaiba, yamiYugi, joey,  tristan, tea, maiValentine,
      marik, bakura, mokuba, yamiBakura, yamiMarik, shadi, maximillionPegasus, ishizuIshtar, dukeDevlin));
  }
}
