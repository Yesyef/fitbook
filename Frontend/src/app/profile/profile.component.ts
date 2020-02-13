import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Service/profile.service';
import { Profile } from '../Model/profile';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  profileId: number;

  constructor(
              private profileService: ProfileService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.profileId = +this.route.snapshot.paramMap.get('id');

    this.loadOneProfile(this.profileId);
  }

   loadOneProfile(profileId) {
     this.profileService.showProfileById(profileId).subscribe(profileFromBackend => {
      this.profile = profileFromBackend});
  }
   
}
