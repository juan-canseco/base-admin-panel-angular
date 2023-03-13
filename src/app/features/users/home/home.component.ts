import { Component, OnInit } from '@angular/core';
import { UsersService, GetUsersQueryParams} from 'app/core/services/users';
import { PagedList } from 'app/core/models/shared';
import { User } from 'app/core/models/users';
import { PermissionsService } from 'app/core/services/permissions';
import { UserPermissions } from 'app/core/models/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pagedList! : PagedList<User>;

  hasCreatePermission : boolean;
  hasEditPermission : boolean;
  hasDeletePermission : boolean;

  sortFields = ['Name', 'Role', 'Active']
  itemsPerPage = [1, 2, 5, 10, 15, 20, 25, 50]
  pageNumber = 1;
  pageSize = 10;
  

  constructor(private userService : UsersService, private permissionsService : PermissionsService) { }

  ngOnInit(): void {
    this.getUsers();
    this.hasCreatePermission = this.permissionsService.hasPermission(UserPermissions.Create);
    this.hasEditPermission = this.permissionsService.hasPermission(UserPermissions.Edit);
    this.hasDeletePermission = this.permissionsService.hasPermission(UserPermissions.Delete);
  }



  getUsers() {
    
    var params  : GetUsersQueryParams = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
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

  filter() {
    console.log("Filter click");
  }


  onPageChange(event : number) {
    this.pageNumber = event;
    this.getUsers();
  }

  onPageSizeChange(event : any) {
    this.pageSize = event.value;
    this.pageNumber = 1;
    this.getUsers();
  }
  
}
