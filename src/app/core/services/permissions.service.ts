import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu';
import { UserPermissions, RolePermissions, ProductPermissions } from '../models/auth';

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
}
