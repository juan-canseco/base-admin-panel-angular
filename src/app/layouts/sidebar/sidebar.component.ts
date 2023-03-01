import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'app/core/services/permissions.service';

declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private permissionsService : PermissionsService) { }

  ngOnInit() {
    this.menuItems = this.permissionsService.buildMenuFromPermissions();
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
