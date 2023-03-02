import { Component, OnInit } from '@angular/core';
import { UsersService, GetUsersQueryParams} from 'app/core/services/users.service';
import { PagedList } from 'app/core/models/shared';
import { User } from 'app/core/models/users';
import { PermissionsService } from 'app/core/services/permissions.service';
import { UserPermissions } from 'app/core/models/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private userService : UsersService, private permissionsService : PermissionsService) { }

  ngOnInit(): void {
    this.getUsers();
    this.hasCreatePermission = this.permissionsService.hasPermission(UserPermissions.Create);
    this.hasEditPermission = this.permissionsService.hasPermission(UserPermissions.Edit);
    this.hasDeletePermission = this.permissionsService.hasPermission(UserPermissions.Delete);
  }
  
  public pagedList! : PagedList<User>;

  public hasCreatePermission : boolean;
  public hasEditPermission : boolean;
  public hasDeletePermission : boolean;

  public getUsers() {
    
    var params  : GetUsersQueryParams = {
      pageNumber: 1,
      pageSize: 10,
      sortOrder: "",
      orderBy: "",
      filer: ""
    };

    this.userService.getUsers(params).subscribe({
      next: pagedList => {
        this.pagedList = pagedList;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public filter() {
    console.log("Filter click");
  }

}
