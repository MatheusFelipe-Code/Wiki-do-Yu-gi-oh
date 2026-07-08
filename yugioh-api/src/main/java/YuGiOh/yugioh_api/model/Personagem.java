package YuGiOh.yugioh_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "personagens")
public class Personagem {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String nome;

  private String imagemUrl;

  private String descricaoCurta;

  private String monstroPrincipal;

  @Column(columnDefinition = "TEXT")
  private String historia;

  @OneToMany(mappedBy = "personagem", cascade = CascadeType.ALL)
  private List<Carta> cartas = new ArrayList<>();

  public List<Carta> getCartas() { return cartas; }
  public void setCartas(List<Carta> cartas) { this.cartas = cartas; }
}
