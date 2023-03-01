import { Component, OnInit } from '@angular/core';
import { UsersService, GetUsersQueryParams} from 'app/core/services/users.service';
import { PagedList } from 'app/core/models/shared';
import { User } from 'app/core/models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public pagedList! : PagedList<User>;
  public hasCreatePermissions : boolean;
  public hasUpdatePermission : boolean;
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
