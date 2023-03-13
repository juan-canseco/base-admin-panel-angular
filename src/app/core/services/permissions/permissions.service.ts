import { Injectable } from '@angular/core';
import { MenuItem } from '../../models/menu';
import { UserPermissions, RolePermissions, DashboardPermissions, ProductPermissions, ModuleItem, Modules} from '../../models/auth';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor() { }

  hasPermission(permission : string) : boolean {
    const permissions : Array<string> = JSON.parse(localStorage.getItem("permissions"));
    return permissions.includes(permission);
  }

  buildMenuFromPermissions() : Array<MenuItem> {
    const permissions : Array<string> = JSON.parse(localStorage.getItem("permissions"));
    var menuItems = Array<MenuItem>();
    menuItems.push({path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: ''});
    if (permissions.includes(UserPermissions.View)) {
      menuItems.push({ path: '/users', title: 'Users',  icon:'groups', class: '' });
    }    
    if (permissions.includes(RolePermissions.View)) {
      menuItems.push({ path: '/roles', title: 'Roles',  icon:'manage_accounts', class: '' });
    }
    if (permissions.includes(ProductPermissions.View)) {
      menuItems.push({ path: '/products', title: 'Products',  icon:'inventory', class: '' })
    }
    return menuItems;
  }

  private createModule(module : string) : ModuleItem {
    switch(module) {
      case Modules.Roles:
        return {
          name: 'Roles', 
          permissions: [
            {name: 'View', selected: false, isView: true, permission: RolePermissions.View},
            {name: 'Create', selected: false, isView: false, permission: RolePermissions.Create},
            {name: 'Edit', selected: false, isView: false, permission: RolePermissions.Edit},
            {name: 'Delete', selected: false, isView: false, permission: RolePermissions.Delete}
          ]
        };
      case Modules.Users:
        return {
          name: 'Users', 
          permissions: [
            {name: 'View', selected: false, isView: true, permission: UserPermissions.View},
            {name: 'Create', selected: false, isView: false, permission: UserPermissions.Create},
            {name: 'Edit', selected: false, isView: false, permission: UserPermissions.Edit},
            {name: 'Delete', selected: false, isView: false, permission: UserPermissions.Delete}
          ]
        };
      case Modules.Products:
        return {
          name: 'Products', 
          permissions: [
            {name: 'View', selected: false, isView: true, permission: ProductPermissions.View},
            {name: 'Create', selected: false, isView: false, permission: ProductPermissions.Create},
            {name: 'Edit', selected: false, isView: false, permission: ProductPermissions.Edit},
            {name: 'Delete', selected: false, isView: false, permission: ProductPermissions.Delete}
          ]
        };

      case Modules.Dashbaord:
        return  {
          name: 'Dashboard', 
          permissions: [
            {name: 'View', selected: false, isView: true, permission: DashboardPermissions.View}
          ]
        };
    }
    return null;
  }

  getAllModulesWithPermissions() : Array<ModuleItem> {
    return [
      this.createModule(Modules.Dashbaord),
      this.createModule(Modules.Users),
      this.createModule(Modules.Roles),
      this.createModule(Modules.Products)
    ];
  }

}
