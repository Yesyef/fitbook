import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Service/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../Model/profile';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  form: FormGroup;
  profileId: number;
  profile: Profile;

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.profileId = +this.route.snapshot.paramMap.get('id');
    this.loadOneProfile(this.profileId);

    this.profileService.change$.subscribe(() => {
      this.profileService.showProfileById(this.profileId)
        .subscribe(profileFromBackend => this.profile = profileFromBackend)
    });

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      gender: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      country: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      sport: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      personalDescription: [''],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    });

  }

  public loadOneProfile(profileId) {
    this.profileService.showProfileById(profileId).subscribe(profileFromBackend => {
      this.profile = profileFromBackend
    });
  }

  editProfile(profileId) {
    if (this.form.valid) {
      let profile: Profile = {
        id: profileId,
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
      this.profileService.updateProfileById(profileId, profile).subscribe();
    } else {
      alert("Form unvalid");
    } this.form.reset();
  }

}
