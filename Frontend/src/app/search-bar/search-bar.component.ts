import { Component, OnInit } from '@angular/core';
import { Profile } from '../Model/profile';
import { ProfileService } from '../Service/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  profiles: Profile[];
  profile: Profile;
  profilesSearchResult: Array<any> = [];
  profileUsername: string = "";
  wantedProfile: string;
  wantedProfileId: number;

  constructor( 
              private profileService: ProfileService,
              private router: Router
              ) { }

  ngOnInit() {

    this.profileService.showAllProfiles().subscribe(profileFromBackend => {
      this.profiles = profileFromBackend;
    })
  }

  findProfile() {
    this.profilesSearchResult = this.profiles.filter(profileToFilter => profileToFilter.username.toLocaleLowerCase()
    .startsWith(this.wantedProfile.toLocaleLowerCase()));
    if (this.profilesSearchResult.length > 0) {
      let profile = this.profiles.find(profileToFilter => profileToFilter.username.toLocaleLowerCase()
      .startsWith(this.wantedProfile.toLocaleLowerCase()));
      this.wantedProfileId = profile.id;
    } else {
      this.wantedProfileId = null;
    }
  }

  removeDropDownList() {
    this.profilesSearchResult = [];
  }

  fillAndFind(profile) {
    this.wantedProfile = profile.username; 
    this.findProfile();
    this.removeDropDownList();
    this.router.navigate(["/profiles"],{queryParams: {id: this.wantedProfileId}});
  }

}
