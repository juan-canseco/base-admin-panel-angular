import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedList } from '../models/shared';
import { User } from '../models/users/user';
import { environment } from 'environments/environment';
import { Observable} from 'rxjs';
import { UserDetails } from '../models/users';

export class GetUsersQueryParams {
  pageNumber : number;
  pageSize : number;
  orderBy : string;
  sortOrder : string;
  filer : string;
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getUsers(params : GetUsersQueryParams) : Observable<PagedList<User>> {
    
    let url = environment.baseUrl + "/users";
    
    let queryParams = new HttpParams()
    .append("pageNumber", params.pageNumber)
    .append("pageSize", params.pageSize)
    .append("orderBy", params.orderBy)
    .append("sortBy", params.sortOrder)
    .append("filter", params.filer);

    return this.http.get<PagedList<User>>(url, {params: queryParams});
  }

  getUserDetails(userId : string) : Observable<UserDetails> {
    var url = `${environment.baseUrl}/users/${userId}`;
    return this.http.get<UserDetails>(url);
  }
}
