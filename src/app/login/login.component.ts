import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../core/services/loading.service';

@Component({
  selector: 'mst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.next(false);
  }
}
