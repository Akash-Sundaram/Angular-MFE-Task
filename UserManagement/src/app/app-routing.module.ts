import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './home/register/register.component';
import { UserListComponent } from './home/user-list/user-list.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path: 'home', loadChildren : () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
