import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { BannerUIService } from 'src/app/core/services/banner-ui.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'mst-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = false;
  breadcrumbs: any[] = [];

  activeUser: User;

  @Output() collapse = new EventEmitter();

  constructor(private bannerUIService: BannerUIService) {}

  ngOnInit(): void {
    this.getBannerUIItems();
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapse.emit(this.isCollapsed);
  }

  private getBannerUIItems() {
    this.bannerUIService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
