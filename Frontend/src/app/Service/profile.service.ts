import { Injectable } from '@angular/core';
import { Profile } from '../Model/profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/profiles'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  username: string;
  sport: string;
  country: string;
  city: string;
  age: number;

  constructor(private http: HttpClient) { }

  public showAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(baseUrl);
  }

  public showProfileById(id: number): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + '/' + id);
  }

  public findProfileByUsername(username): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + "?name=" + username);
  }

  public findProfileBySport(sport): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + "?sport=" + sport);
  }

  public findProfileByCountry(country): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + "?country=" + country);
  }

  public findProfileByAge(age): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + "?age=" + age);
  }

  public findProfileByCity(city): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + "?city=" + city);
  }

  public createProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(baseUrl, profile);
  }

  public updateProfileById(id: number, profile: Profile): Observable<void> {
    return this.http.put<void>(baseUrl + '/' + id, profile);
  }

  public deleteProfileById(id: number): Observable<void> {
    return this.http.delete<void>(baseUrl + '/' + id);
  }
}
