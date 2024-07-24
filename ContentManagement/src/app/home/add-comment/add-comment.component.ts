import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from 'src/app/Services/root.service';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {

  commentForm !: FormGroup;
  comments !: Comment[];
  postId ! : string;


  constructor(private route : ActivatedRoute, private formBuilder: FormBuilder,private service : RootService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.postId=params['postId']);
    this.commentForm = this.formBuilder.group({
      postId: [this.postId, Validators.required],
      content: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      this.service.addComment(this.commentForm.value).subscribe(() => {
      alert('Registered Successfully');
      this.router.navigate(['users']);
    });
  }
}
getComment() {
  this.service.getComment(this.postId).subscribe(comments => this.comments = comments)
}
deleteComment(id : string) {
  this.service.deleteComment(id).subscribe();
}

}
