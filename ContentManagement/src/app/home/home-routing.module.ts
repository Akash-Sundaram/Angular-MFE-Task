import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

const routes: Routes = [
 {
  path:'login',component : LoginComponent
 },
{
  path:'posts',component : CreatePostComponent
},
{
  path :'comments/:id',component : AddCommentComponent
},
{
  path:'', redirectTo : 'login' , pathMatch : 'full'
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
