package fitbook.profile;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

import fitbook.post.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Profile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Email(message = "Email should be valid" )
	private String email;
	
	@NotBlank
	@NotNull
	@Size(min = 3, max = 20)
	private String username;
	
	@NotNull
	@Min(value = 18)
	@Max(value = 99)
	private int age;
	
	@NotBlank
	@NotNull
	@Size(min = 3, max = 15)
	private String gender;
	
	@NotBlank
	@NotNull
	@Size(min = 1, max = 30)
	private String country;
	
	@NotBlank
	@NotNull
	@Size(min = 1, max = 30)
	private String city;
	
	@NotBlank
	@NotNull
	@Size(min = 1, max = 30)
	private String sport;
	
	@Size(max = 200)
	private String personalDescription;
	
	@NotBlank
	@NotNull
	@Size(min = 6, max = 25)
	private String password;
	
	@OneToMany(mappedBy = "profile")
	@JsonBackReference
	private List<Post> listOfPosts;
	
}
