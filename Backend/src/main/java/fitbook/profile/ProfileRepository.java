package fitbook.profile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
	
	ArrayList<Profile> findByUsernameContains(String username);
	ArrayList<Profile> findBySport(String Sport);
	ArrayList<Profile> findByCountry(String country);
	ArrayList<Profile> findByCity(String city);
	ArrayList<Profile> findByAge(Integer age);
	Optional<Profile> findById(Long id);

}
