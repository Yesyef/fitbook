import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Service/profile.service';
import { Profile } from '../Model/profile';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Service/post.service';
import { Post } from '../Model/post';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  profileId: number;
  listOfPosts: Post[];
  form: FormGroup;
  // formP: FormGroup;
  post: Post;
  postId: number;
  enteredPassword: string;


  constructor(
    private profileService: ProfileService,
    private postService: PostService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.profileId = +this.route.snapshot.paramMap.get('id');
    this.loadOneProfile(this.profileId);
    this.loadPostsByProfileId(this.profileId);

    this.postService.change$.subscribe(() => {
      this.postService.findPostsByProfileId(this.profileId)
        .subscribe(postsFromBackend => this.listOfPosts = postsFromBackend)
    });

    this.profileService.change$.subscribe(() => {
      this.profileService.showProfileById(this.profileId)
        .subscribe(profileFromBackend => this.profile = profileFromBackend)
    });

    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });


  }

  loadOneProfile(profileId) {
    this.profileService.showProfileById(profileId).subscribe(profileFromBackend => {
      this.profile = profileFromBackend
    });
  }

  loadPostsByProfileId(profileId) {
    this.postService.findPostsByProfileId(profileId).subscribe(postsFromBackend => {
      this.listOfPosts = postsFromBackend
    });
  }

  createNewPost() {
    if (this.form.valid) {
      let post: Post = {
        title: this.form.value.title,
        content: this.form.value.content,
        date: this.form.value.date,
        category: this.form.value.category,
        profile: {
          id: this.profileId
        }
      }
      this.postService.createPost(post).subscribe();
      this.router.navigate(["/posts"]);
    } else {
      alert("Post is not valid")
    }
    this.form.reset();
  }

  deleteOnePost(postId) {
    this.postService.deletePostById(postId).subscribe(() => this.loadPostsByProfileId(this.profileId));
  }


  deleteProfile(profileId) {
    this.profileService.deleteProfileById(profileId).subscribe();
    this.router.navigate(["/profiles"]);

  }


}




