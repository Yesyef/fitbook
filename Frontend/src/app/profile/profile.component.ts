import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Service/profile.service';
import { Profile } from '../Model/profile';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Service/post.service';
import { Post } from '../Model/post';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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


  constructor(
    private profileService: ProfileService,
    private postService: PostService,
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

  //   this.profileService.change$.subscribe(() => {
  //    this.profileService.showProfileById(this.profileId)
  //       .subscribe(profileFromBackend => this.profile = profileFromBackend)
  //   });

    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });

    // this.formP = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    //   age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
    //   gender: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
    //   country: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    //   city: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    //   sport: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    //   personalDescription: [''],
    //   password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    // });

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
    } else {
      alert("Eingabe ungültig")
    }
    this.form.reset();
  }

  deleteOnePost(postId) {
    this.postService.deletePostById(postId).subscribe(() => this.loadPostsByProfileId(this.profileId));
  }

  // editProfile(profileId) {
  //   if (this.formP.valid) {
  //     let profile: Profile = {
  //       id: profileId,
  //       email: this.form.value.email,
  //       username: this.form.value.username,
  //       age: this.form.value.age,
  //       gender: this.form.value.gender,
  //       country: this.form.value.country,
  //       city: this.form.value.city,
  //       sport: this.form.value.sport,
  //       personalDescription: this.form.value.personalDescription,
  //       password: this.form.value.password,
  //     }
  //     this.profileService.updateProfileById(profileId, profile).subscribe();
  //   } else {
  //     alert("Form unvalid");
  //   } this.formP.reset();
  // }

}




