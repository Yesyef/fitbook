package fitbook.post;

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
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

	private final PostRepository postRepository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Post> showPosts(
								@RequestParam(required = false) String category,
								@RequestParam(required = false) String title,
								@RequestParam(required = false) String content,
								@RequestParam(required = false) Integer likes
								){
		if (title != null) {
			return postRepository.findByTitleContains(title);
		} else if (category != null) {
			return postRepository.findByCategory(category);
		} else if (content != null) {
			return postRepository.findByContentContains(content);
		} else if (likes != null) {
			return postRepository.findByLikes(likes);
		}
		return postRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Post> showOnePost(@PathVariable Long id){
		if (!postRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return ResponseEntity.of(postRepository.findById(id));
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Post createPost(@RequestBody @Valid Post post) {
		post.setId(null);
		return postRepository.save(post);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Post> updatePostById (@PathVariable Long id, @RequestBody @Valid Post post){
		if (!postRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		post.setId(id);
		postRepository.save(post);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Post> deletePostById (@PathVariable Long id){
		if (!postRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		postRepository.deleteById(id);;
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
