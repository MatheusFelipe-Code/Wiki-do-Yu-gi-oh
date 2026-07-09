package YuGiOh.yugioh_api.config;

import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import YuGiOh.yugioh_api.model.Carta;
import YuGiOh.yugioh_api.model.Personagem;
import YuGiOh.yugioh_api.repository.PersonagemRepository;

@Configuration
public class TestConfig implements CommandLineRunner {

  @Autowired
  private PersonagemRepository personagemRepository;



  @Override
  public void run(String... args) throws Exception {

    ObjectMapper objectMapper = new ObjectMapper();

    InputStream inputStream = TypeReference.class.getResourceAsStream("/dados-iniciais.json");

    try {
        List<Personagem> personagens = objectMapper.readValue(inputStream, new TypeReference<List<Personagem>>(){});

        for (Personagem personagem : personagens) {
            if (personagem.getCartas() !=null) {
              for (Carta carta : personagem.getCartas()) {
                  carta.setPersonagem(personagem);
              }
            }
        }

        personagemRepository.saveAll(personagens);

        System.out.println("Banco de dados populado com sucesso a partir do JSON!");

    } catch (Exception e) {
        System.out.println("Erro ao tentar ler dados de dados: " + e.getMessage());
    }
  }
}
