import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profile } from '../Model/profile';
import { ProfileService } from '../Service/profile.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  form: FormGroup;
  profile: Profile;
  profiles: Profile[];

  constructor(
              private profileService: ProfileService,
              private location: Location,
              private fb: FormBuilder
              ) { }

  ngOnInit() {

this.loadAllProfiles();

    this.form = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      username:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      age:['', [Validators.required, Validators.min(18), Validators.max(99)]],
      gender:['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      country:['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      city:['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      sport:['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      personalDescription:[''],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    });

  }

  loadAllProfiles() {
    this.profileService.showAllProfiles().subscribe(profilesFromBackend => this.profiles = profilesFromBackend);
  }

  createNewProfile() {
    if (this.form.valid) {
      let profile: Profile = {
        email: this.form.value.email,
        username: this.form.value.username,
        age: this.form.value.age,
        gender: this.form.value.gender,
        country: this.form.value.country,
        city: this.form.value.city,
        sport: this.form.value.sport,
        personalDescription: this.form.value.personalDescription,
        password: this.form.value.password,
      }
      this.profileService.createProfile(profile).subscribe(createdProfile => {
        this.profiles.push(profile)
      });
    } else {
        alert("Form unvalid");
    }
  }

}
