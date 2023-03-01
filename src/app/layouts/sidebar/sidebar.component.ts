import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'app/core/models/menu';

declare const $: any;
export const ROUTES: MenuItem[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/users', title: 'Users',  icon:'groups', class: '' },
    { path: '/roles', title: 'Roles',  icon:'manage_accounts', class: '' },
    { path: '/products', title: 'Products',  icon:'inventory', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
