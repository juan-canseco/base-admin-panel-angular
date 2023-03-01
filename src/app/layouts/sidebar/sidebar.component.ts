import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'app/core/models/menu';
import { AuthService } from 'app/core/services/auth.service';
import { UserPermissions, RolePermissions, ProductPermissions,  } from 'app/core/models/auth';

declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.menuItems = this.buildMenuItems();
  }


  private buildMenuItems() : Array<MenuItem> {
    var menuItems = Array<MenuItem>();
    menuItems.push({path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: ''});
    if (this.authService.hasPermission(UserPermissions.View)) {
      menuItems.push({ path: '/users', title: 'Users',  icon:'groups', class: '' });
    }    
    if (this.authService.hasPermission(RolePermissions.View)) {
      menuItems.push({ path: '/roles', title: 'Roles',  icon:'manage_accounts', class: '' });
    }
    if (this.authService.hasPermission(ProductPermissions.View)) {
      menuItems.push({ path: '/products', title: 'Products',  icon:'inventory', class: '' })
    }
    return menuItems;
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
