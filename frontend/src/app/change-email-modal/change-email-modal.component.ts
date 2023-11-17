import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, } from '@angular/material/dialog';

@Component({
  selector: 'app-change-email-modal',
  templateUrl: './change-email-modal.component.html',
  styleUrls: ['./change-email-modal.component.css']
})
export class ChangeEmailModalComponent {
  @Input() modalTitle = 'Alterar Email';
  @Output() modalConfirmed = new EventEmitter<void>();
  @Output() modalCancelled = new EventEmitter<void>();
  @Output() modalClose = new EventEmitter<void>();

  currentEmail: string = '';
  newEmail: string = '';

  constructor(
    public dialogRef: MatDialogRef<ChangeEmailModalComponent>
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
    // Implemente a lógica para confirmar a alteração de email aqui
    // this.modalConfirmed.emit();;
    console.log("teste")

    this.closeModal();
  }

  cancel() {
    this.modalCancelled.emit();
    this.closeModal();
  }
}
