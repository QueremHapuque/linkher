import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  Field: string;
}
@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})


export class ChangePasswordModalComponent {
  @Input() modalTitle = 'Senha';

  currentPassword: string | undefined;
  newPassword: string | undefined;
  confirmNewPassword: string | undefined;
  passwordsMatch = true;

  constructor(public dialogRef: MatDialogRef<ChangePasswordModalComponent>, @Inject(MAT_DIALOG_DATA) public dataModal: DialogData) { }

  closeModal() {
    this.dialogRef.close();
  }

  closeModalOnKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  confirm() {
    console.log(this.newPassword)
    // this.dialogRef.close({ newPassword: this.newPassword });
    if (this.newPassword === this.confirmNewPassword) {
      this.passwordsMatch = true;
      this.dialogRef.close({ newPassword: this.newPassword });
    } else {
      this.passwordsMatch = false;
    }
  }

  cancel() {
    this.closeModal();
  }
}
