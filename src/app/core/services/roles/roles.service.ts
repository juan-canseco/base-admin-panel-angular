import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role, RoleDetails } from '../../models/roles';
import { PagedList } from '../../models/shared';
import { environment } from 'environments/environment';

export interface GetRolesQueryParams {
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  sortOrder: string;
  filter: string;
};

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http : HttpClient) { }

  getRoles(queryParams : GetRolesQueryParams) : Observable<PagedList<Role>> {
    var baseUrl = environment.baseUrl + '/roles';
    var params = new HttpParams()
    .append("pageNumber", queryParams.pageNumber)
    .append("pageSize", queryParams.pageSize)
    .append("sortBy", queryParams.sortBy)
    .append("sortOrder", queryParams.sortOrder)
    .append("filter", queryParams.filter);    
    return this.http.get<PagedList<Role>>(baseUrl, {params: params});
  }
  
  getAllRoles() : Observable<Role[]> {
    var baseUrl = environment.baseUrl + '/roles/all';
    return this.http.get<Role[]>(baseUrl);
  }

  getRoleDetails(roleId : string) : Observable<RoleDetails> {
    var baseUrl = `${environment.baseUrl}/roles/${roleId}`;
    return this.http.get<RoleDetails>(baseUrl);
  }
}
