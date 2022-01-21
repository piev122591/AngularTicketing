import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'mts-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  step: number = 1;

  constructor(private toastrService: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  resetPassword() {
    this.toastrService.success('Password updated successfully!');
    this.router.navigate(['/login']);
  }
}
