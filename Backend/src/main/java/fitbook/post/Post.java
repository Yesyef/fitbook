package fitbook.post;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


import fitbook.profile.Profile;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@NotNull
	@Size(min = 3, max = 25)
	private String title;
	
	@NotBlank
	@NotNull
	@Size(min = 3)
	private String content;
	
	private int likes = 0;
	
	private boolean visibility = false;
	
	@NotBlank
	@NotNull
	@Size(min = 3, max = 25)
	private String category;
	
	@ManyToOne
	@JoinColumn ( name = "profile_id", nullable = false)
	private Profile profile;
	
	
	private ArrayList<String> listOfComments;
	

}
