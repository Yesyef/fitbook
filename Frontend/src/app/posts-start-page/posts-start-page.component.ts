import { Component, OnInit } from '@angular/core';
import { Post } from '../Model/post';
import { PostService } from '../Service/post.service';

@Component({
  selector: 'app-posts-start-page',
  templateUrl: './posts-start-page.component.html',
  styleUrls: ['./posts-start-page.component.css']
})
export class PostsStartPageComponent implements OnInit {

allPosts: Post[];

  constructor(
              private postService: PostService
              ) { }

  ngOnInit() {
    this.loadAllPosts();
  }

  loadAllPosts() {
    this.postService.showAllPosts().subscribe(postsFromBackend => {
      this.allPosts = postsFromBackend
    });
  }

}
