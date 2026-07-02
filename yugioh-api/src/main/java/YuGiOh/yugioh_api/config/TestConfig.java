package YuGiOh.yugioh_api.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

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

    personagemRepository.saveAll(Arrays.asList(yugi, kaiba));
  }
}
