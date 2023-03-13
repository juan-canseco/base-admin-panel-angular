import { Component, OnInit } from '@angular/core';
import { ModuleItem } from 'app/core/models/auth';
import { PermissionsService } from 'app/core/services/permissions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  modules : Array<ModuleItem>;

  constructor(private permissionsService : PermissionsService) { }

  ngOnInit(): void {
    this.modules = this.permissionsService.getAllModulesWithPermissions();
  }

}
