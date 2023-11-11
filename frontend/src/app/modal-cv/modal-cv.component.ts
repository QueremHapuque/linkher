import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  Field: string;
}

@Component({
  selector: 'app-modal-cv',
  templateUrl: './modal-cv.component.html',
  styleUrls: ['./modal-cv.component.css']
})
export class ModalCvComponent implements OnInit {
  fieldType: string;

  @Input()
  courseName: string | undefined;
  institution: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<ModalCvComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModal: DialogData,
  ) {
    this.fieldType = this.dataModal.Field
  }

  ngOnInit() {
    
  }

  public close() {
    this.dialogRef.close();
  }
}
