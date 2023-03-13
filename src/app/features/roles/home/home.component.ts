import { Component, OnInit } from '@angular/core';
import { Role } from 'app/core/models/roles';
import { PagedList } from 'app/core/models/shared';
import { RolesService, GetRolesQueryParams} from 'app/core/services/roles';
import { RolePermissions } from 'app/core/models/auth';
import { PermissionsService } from 'app/core/services/permissions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private roleService : RolesService, private permissionsService : PermissionsService) { }
  
  pagedList! : PagedList<Role>;
  hasCreatePermission : boolean;
  hasEditPermission : boolean;
  hasDeletePermission : boolean;

  ngOnInit(): void {
    this.getRoles();
    this.hasCreatePermission = this.permissionsService.hasPermission(RolePermissions.Create);
    this.hasDeletePermission = this.permissionsService.hasPermission(RolePermissions.Delete);
    this.hasEditPermission = this.permissionsService.hasPermission(RolePermissions.Edit);
  }

  getRoles() {
    var params : GetRolesQueryParams = { pageNumber: 1, pageSize: 10, sortBy: '', sortOrder: '', filter: ''}; 
    this.roleService.getRoles(params).subscribe({
      next: result => {
        this.pagedList = result;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public filter() {

  }

}
