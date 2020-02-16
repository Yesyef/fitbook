import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Service/profile.service';
import { Profile } from '../Model/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profiles: Profile[];


  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    this.loadAllProfiles();

    this.profileService.change$.subscribe(() => {
      this.profileService.showAllProfiles()
        .subscribe(profilesFromBackend => this.profiles = profilesFromBackend)
    });
  }

  public loadAllProfiles() {

    this.profileService.showAllProfiles().subscribe(profilesFromBackend => {
      this.profiles = profilesFromBackend;
    })
  }

}
