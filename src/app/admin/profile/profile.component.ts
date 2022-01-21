import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BannerUIService } from 'src/app/core/services/banner-ui.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'mts-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private toastrService: ToastrService,
    private bannerUIService: BannerUIService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.bannerUIService.breadcrumbs$.next([
      { name: 'Home', path: ['/admin'] },
      { name: 'User Profile' },
    ]);
  }
}
