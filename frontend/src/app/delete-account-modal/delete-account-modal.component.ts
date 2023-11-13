import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-account-modal',
  templateUrl: './delete-account-modal.component.html',
  styleUrls: ['./delete-account-modal.component.css']
})

export class DeleteAccountModalComponent {
  @Input() modalTitle = 'Excluir Conta';
  @Output() modalConfirmed = new EventEmitter<void>();
  @Output() modalCancelled = new EventEmitter<void>();
  @Output() modalClose = new EventEmitter<void>();


  constructor(
    public dialogRef: MatDialogRef<DeleteAccountModalComponent>
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
