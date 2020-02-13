package fitbook.profile;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/profiles")
@RequiredArgsConstructor
public class ProfileController {
	
	private final ProfileRepository profileRepository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Profile> showProfiles(
			@RequestParam(required = false) String username,
			@RequestParam(required = false) Integer age,
			@RequestParam(required = false) String sport,
			@RequestParam(required = false) String country,
			@RequestParam(required = false) String city
			){
		if (username != null) {
			return profileRepository.findByUsernameContains(username);	
		} else if (age != null) {
			return profileRepository.findByAge(age);	
		} else if (sport != null) {
			return profileRepository.findBySport(sport);	
		} else if (country != null) {
			return profileRepository.findByCountry(country);	
		} else if (city != null) {
			return profileRepository.findByCity(city);	
		}
		return profileRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> showOneProfile(@PathVariable Long id) {
		if (!profileRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return ResponseEntity.of(profileRepository.findById(id)); 
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Profile createProfile(@RequestBody @Valid Profile profile) {
		profile.setId(null);
		return profileRepository.save(profile);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delteProfileById (@PathVariable Long id) {
		if (!profileRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		profileRepository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateProfileById (@PathVariable Long id, @RequestBody @Valid Profile profile) {
		if (!profileRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		profile.setId(id);
		profileRepository.save(profile);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}

}
