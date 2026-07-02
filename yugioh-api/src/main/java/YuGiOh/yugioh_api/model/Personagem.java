package YuGiOh.yugioh_api.model;

import jakarta.persistence.*;
import lombok.Data;

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

}
