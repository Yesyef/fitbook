import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { MainComponent } from './main/main.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsStartPageComponent } from './posts-start-page/posts-start-page.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    MainComponent,
    RegistrationFormComponent,
    NavbarComponent,
    ProfileComponent,
    PostsStartPageComponent,
    ProfileEditComponent,
    SearchBarComponent,
    ProfileListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
