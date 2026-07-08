package YuGiOh.yugioh_api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Carta {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nome;
  private String imagem;

  @ManyToOne
  @JoinColumn(name = "personagem_id")
  @JsonIgnore
  private Personagem personagem;

  public Long getId() { return id;}
  public void setId(Long id) { this.id = id; }

  public String getNome() { return nome; }
  public void setNome(String nome) { this.nome = nome; }

  public String getImagem() { return imagem; }
  public void setImagem(String imagem) { this.imagem = imagem; }

  public Personagem getPersonagem() { return personagem; }
  public void setPersonagem(Personagem personagem) { this.personagem = personagem; }
}
