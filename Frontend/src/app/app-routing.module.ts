import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: "start", pathMatch: "full"},
  { path: 'start', component: StartPageComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'profiles/:id', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
