import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'mts-error-info',
  templateUrl: './error-info.component.html',
  styleUrls: ['./error-info.component.scss'],
})
export class ErrorInfoComponent implements OnInit {
  errors: string[];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}
}
