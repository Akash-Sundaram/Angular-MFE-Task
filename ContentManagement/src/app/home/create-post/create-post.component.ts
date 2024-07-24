import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';
import { RootService } from 'src/app/Services/root.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit{
  postForm !: FormGroup;
  posts !: Post[];

  constructor(private fb: FormBuilder,private service: RootService) {}

  ngOnInit(): void {
    this.getPost();
    this.postForm = this.fb.group({
      postId : ['',Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
     this.service.addPost(this.postForm.value).subscribe();
    //  this.getPost();
    }
  }
  getPost(): void{
    this.service.getPost().subscribe(posts => {
      this.posts = posts;
    });
  }
  deletePost(id : string) : void{
    this.service.deletePost(id).subscribe();
    this.service.deleteCommentByPost(id).subscribe();
  }

}
