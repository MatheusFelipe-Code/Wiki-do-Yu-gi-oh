package YuGiOh.yugioh_api.repository;

import YuGiOh.yugioh_api.model.Personagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonagemRepository extends JpaRepository<Personagem, Long> {
}
