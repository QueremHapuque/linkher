import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  Field: string;
}

@Component({
  selector: 'app-change-email-modal',
  templateUrl: './change-email-modal.component.html',
  styleUrls: ['./change-email-modal.component.css']
})
export class ChangeEmailModalComponent {
  @Input() modalTitle = 'Alterar Email';

  currentEmail: string | undefined;
  newEmail: string | undefined;

  constructor(public dialogRef: MatDialogRef<ChangeEmailModalComponent>, @Inject(MAT_DIALOG_DATA) public dataModal: DialogData) { }

  closeModal() {
    this.dialogRef.close();
  }

  closeModalOnKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  confirm() {

    console.log(this.newEmail);
    this.dialogRef.close({ newEmail: this.newEmail });

    // this.closeModal();
  }

  cancel() {
    this.closeModal();
  }
}
