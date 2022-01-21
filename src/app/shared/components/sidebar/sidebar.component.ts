import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'mst-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  adminControls: any[] = [
    {
      name: 'Home',
      languageItem: '',
      route: '/admin',
      icon: 'fas fa-home',
      isActive: false,
    },
    {
      name: 'Maestro Support',
      languageItem: '',
      route: '/admin/support',
      icon: 'fas fa-filter',
      isActive: false,
    },
    {
      name: 'Service Desk - All',
      languageItem: '',
      route: '/admin/service-desk',
      icon: 'fas fa-list',
      isActive: false,
    },
    {
      name: 'Reports - View/Run',
      languageItem: '',
      route: '/admin/service-desk',
      icon: 'fas fa-info-circle',
      isActive: false,
    },
    {
      name: 'Savings Discovered',
      languageItem: '',
      route: '/admin/savings-discovered',
      icon: 'fas fa-file-alt',
      isActive: false,
    },
    {
      name: 'IT Service Board',
      languageItem: '',
      route: '/admin/it-service-board',
      icon: 'fas fa-clipboard',
      isActive: false,
    },
    // {
    //   name: 'Security',
    //   languageItem: 'Navigation|Security',
    //   icon: 'fas fa-lock',
    //   subControls: [
    //     {
    //       name: 'Roles',
    //       languageItem: 'Navigation|Roles',
    //       route: '/admin/roles',
    //     },
    //     {
    //       name: 'Staff',
    //       route: '/admin/staff',
    //     },
    //     {
    //       name: 'Users',
    //       languageItem: 'Navigation|Users',
    //       route: '/admin/users',
    //     },
    //   ],
    //   isActive: false,
    // },
    // {
    //   name: 'Facilities',
    //   route: '/admin/facilities',
    //   icon: 'fas fa-warehouse',
    //   isActive: false,
    // },
    // {
    //   name: 'Configuration',
    //   languageItem: 'Navigation|Configuration',
    //   icon: 'fas fa-gear',
    //   isActive: false,
    //   subControls: [
    //     {
    //       name: 'Application Settings',
    //       route: '/admin/application-settings',
    //     },
    //     {
    //       name: 'Device Registration',
    //       route: '/admin/device-registration',
    //     },
    //     {
    //       name: 'Mandatory Fields',
    //       route: '/admin/mandatory-fields',
    //     },
    //     {
    //       name: 'Authentication',
    //       route: '/admin/authentication',
    //     },
    //     {
    //       name: 'Table Metadata',
    //       route: '/admin/table-metadata',
    //     },
    //     {
    //       name: 'Table Maintenance',
    //       languageItem: 'Navigation|TableMaintenance',
    //       route: '/admin/table-maintenance',
    //     },
    //     {
    //       name: 'Fields Config',
    //       route: '/admin/fields-config',
    //     },
    //   ],
    // },
  ];

  queryNavigator: string;

  @Input() isCollapsed: boolean = false;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(
      this.router.url,
      '/admin/roles',
      this.router.url.includes('/admin/roles-add')
    );
    this.checkRouterLinkActive();
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.checkRouterLinkActive();
      }
    });
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.checkRouterLinkActive();
  }

  private checkRouterLinkActive() {
    this.adminControls = this.adminControls.map((control) => {
      if (control.subControls) {
        control.subControls = control.subControls.map((sC: any) => ({
          ...sC,
          isActive: this.router.url.includes(sC.route),
        }));
        control.isActive = control.subControls.some((sC: any) => sC.isActive);
      } else {
        if (control.route === '/admin') {
          control.isActive = this.router.url === '/admin';
        } else {
          control.isActive = this.router.url.includes(control.route);
        }
      }

      return control;
    });

    console.log(this.adminControls);

    setTimeout(() => {
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    });
  }
}
