import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})


export class ChangePasswordModalComponent {
  @Input() modalTitle = 'Senha';
  @Output() modalConfirmed = new EventEmitter<void>();
  @Output() modalCancelled = new EventEmitter<void>();
  @Output() modalClose = new EventEmitter<void>();

  currentEmail: string = '';
  newEmail: string = '';

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordModalComponent>
  ) {}

  closeModal() {
    this.modalClose.emit();
    this.dialogRef.close();
    console.log("aaaaaaaa")
  }

  closeModalOnKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  confirm() {
    // this.modalConfirmed.emit();;
    console.log("teste")

    this.closeModal();
  }

  cancel() {
    this.modalCancelled.emit();
    this.closeModal();
  }
}
