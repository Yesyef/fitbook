import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsStartPageComponent } from './posts-start-page/posts-start-page.component';
import { ProfileListComponent } from './profile-list/profile-list.component';


const routes: Routes = [
  { path: '', redirectTo: "start", pathMatch: "full"},
  { path: 'start', component: StartPageComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'posts', component: PostsStartPageComponent},
  { path: 'profiles', component: ProfileListComponent},
  { path: 'profiles/:id', component: ProfileComponent},
  { path: 'profiles?id=:id', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
