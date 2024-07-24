import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './home/create-post/create-post.component';

const routes: Routes = [
  {
    path: '', component:CreatePostComponent
  },
  {
    path : 'home', loadChildren : () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
