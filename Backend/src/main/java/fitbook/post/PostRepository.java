package fitbook.post;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
	
	ArrayList<Post> findByCategory(String category);
	ArrayList<Post> findByTitleContains(String title);
	ArrayList<Post> findByContentContains(String content);
	ArrayList<Post> findByLikes(Integer likes);
	ArrayList<Post> findByProfileId(Long profileId);

}
