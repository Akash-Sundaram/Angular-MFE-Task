import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'UserManagement',pathMatch:'full'},
  {
    path: 'UserManagement',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5002/remoteEntry.js',
        exposedModule: 'HomeModule',
      }).then((m) => m.HomeModule),
  },
  {
    path: 'ContentManagement',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5001/remoteEntry.js',
        exposedModule: 'HomeModule',
      }).then((m) => m.HomeModule),
  },
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
