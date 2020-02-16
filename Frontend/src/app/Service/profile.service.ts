import { Injectable } from '@angular/core';
import { Profile } from '../Model/profile';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'

const baseUrl = 'http://localhost:8080/profiles'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly change$ = new Subject<void>();

  username: string;
  sport: string;
  country: string;
  city: string;
  age: number;
  id: number;

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

  public findProfileById(id): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + "?id=" + id);
  }

  public findProfileByCity(city): Observable<Profile> {
    return this.http.get<Profile>(baseUrl + "?city=" + city);
  }

  public createProfile(profile: Profile): Observable<void> {
    return this.http.post<void>(baseUrl, profile).pipe(tap(() => this.change$.next()));
  }

  public updateProfileById(id: number, profile: Profile): Observable<void> {
    return this.http.put<void>(baseUrl + '/' + id, profile).pipe(tap(() => this.change$.next()));
  }

  public deleteProfileById(id: number): Observable<void> {
    return this.http.delete<void>(baseUrl + '/' + id).pipe(tap(() => this.change$.next()));
  }
}
