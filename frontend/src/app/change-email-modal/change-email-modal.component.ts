import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  closeModal() {
    this.modalClose.emit();
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
    console.log("CLIQUEI NESSA BUCETA")

    this.closeModal();
  }

  cancel() {
    this.modalCancelled.emit();
    this.closeModal();
  }
}
