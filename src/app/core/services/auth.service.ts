import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'environments/environment';
import { Observable, shareReplay, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/auth';
import { UserProfile } from '../models/auth/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private jwtHelper : JwtHelperService) { }

  login(request : LoginRequest) : Observable<LoginResponse> {
    return this.http
    .post<LoginResponse>(environment.baseUrl + "/Identity/signIn", request)
    .pipe(
      tap(this.setSession),
      shareReplay(1));
  }
  private setSession(loginResponse: LoginResponse) : void {
    localStorage.setItem("token", loginResponse.token);
    localStorage.setItem("permissions", JSON.stringify(loginResponse.permissions));
    const userProfle : UserProfile = {
      userId: loginResponse.userId,
      role: loginResponse.role,
      email: loginResponse.email,
      fullname: loginResponse.fullname,
      isVerified: loginResponse.isVerified
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfle));
  }

  logOut() : void {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    localStorage.removeItem("userProfile");
  }

  hasPermission(permission : string) : boolean {
    const permissions : Array<string> = JSON.parse(localStorage.getItem("permissions"));
    return permissions.includes(permission);
  }

  isLoggedIn() : boolean {
    const token = localStorage.getItem("token");
    return this.jwtHelper.isTokenExpired(token);
  }

  getUserProfle() : UserProfile {
    return JSON.parse(localStorage.getItem("userProfile"));
  }
}
