import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/userComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'userComponent', component: UserComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
