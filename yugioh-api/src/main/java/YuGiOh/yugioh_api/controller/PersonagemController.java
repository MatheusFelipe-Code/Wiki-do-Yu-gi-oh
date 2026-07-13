package YuGiOh.yugioh_api.controller;

import YuGiOh.yugioh_api.model.Personagem;
import YuGiOh.yugioh_api.repository.PersonagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personagens")
@CrossOrigin(origins = {"http://localhost:4200", "https://wiki-do-yu-gi-oh-front.onrender.com"})
public class PersonagemController {

  @Autowired
  private PersonagemRepository personagemRepository;

  @GetMapping
  public List<Personagem> listarTodos() {
    return personagemRepository.findAll();
  }

  @PostMapping
  public Personagem criar(@RequestBody Personagem personagem) {
    return personagemRepository.save(personagem);
  }

  @GetMapping("/{id}")
  public Personagem buscarPorId(@PathVariable Long id) {
    return personagemRepository.findById(id).orElse(null);
  }
}
