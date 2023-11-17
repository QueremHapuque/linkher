import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeEmailModalComponent } from '../change-email-modal/change-email-modal.component';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { DeleteAccountModalComponent } from '../delete-account-modal/delete-account-modal.component';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {

  constructor(private dialog: MatDialog) {}

  openChangeEmailModal() {
    const dialogRef = this.dialog.open(ChangeEmailModalComponent, {
      width: '400px',
       // Largura do modal, personalize conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      // Esta função é chamada ao fechar o modal.
    });
  }
  openChangePasswordModal() {
    const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
      width: '400px',
       // Largura do modal, personalize conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      // Esta função é chamada ao fechar o modal.
    });
  }
  openDeleteAccountModal() {
    const dialogRef = this.dialog.open(DeleteAccountModalComponent, {
      width: '400px',
       // Largura do modal, personalize conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      // Esta função é chamada ao fechar o modal.
    });
  }

  // Outros métodos e lógica aqui
}
