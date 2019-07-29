import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.viewPost();
  }

  viewPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
    });
  }

}
