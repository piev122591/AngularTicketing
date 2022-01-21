import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mts-add-attachment',
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.scss'],
})
export class AddAttachmentComponent implements OnInit {
  uploadedFile: File;

  isUploading: boolean;

  tableName: string;
  onUploadCallback: Function;

  constructor(
    public bsModalRef: BsModalRef,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  onFileUpload(event: any) {
    console.log(event);
    this.uploadedFile = event.target.files[0];
  }

  upload() {
    this.isUploading = true;
  }
}
