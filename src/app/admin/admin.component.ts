import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../core/services/loading.service';

@Component({
  selector: 'mst-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isCollapsed: boolean = false;

  adminControls: any[] = [
    {
      name: 'Dashboard',
      route: '/admin',
      icon: 'fas fa-columns',
      isActive: false,
    },
    {
      name: 'Security',
      icon: 'fas fa-lock',
      subControls: [
        {
          name: 'Roles',
          route: '/admin/roles',
        },
        {
          name: 'Staff',
          route: '/admin/staff',
        },
        {
          name: 'Users',
          route: '/admin/users',
        },
      ],
      isActive: false,
    },
    {
      name: 'Facilities',
      route: '/admin/facilities',
      icon: 'fas fa-warehouse',
      isActive: false,
    },
    {
      name: 'Configuration',
      icon: 'fas fa-gear',
      isActive: false,
      subControls: [
        {
          name: 'Application Settings',
          route: '/admin/application-settings',
        },
        {
          name: 'Device Registration',
          route: '/admin/device-registration',
        },
        {
          name: 'Mandatory Fields',
          route: '/admin/mandatory-fields',
        },
        {
          name: 'Authentication',
          route: '/admin/authentication',
        },
        {
          name: 'Table Metadata',
          route: '/admin/table-metadata',
        },
        {
          name: 'Table Maintenance',
          route: '/admin/table-maintenance',
        },
      ],
    },
  ];

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.next(false);
  }
}
