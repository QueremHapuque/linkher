import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeEmailModalComponent } from '../change-email-modal/change-email-modal.component';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { DeleteAccountModalComponent } from '../delete-account-modal/delete-account-modal.component';
import { AccountSettingsService } from '../utils/services/acconut-settings.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {

  constructor(private dialog: MatDialog, private accountSettingsService: AccountSettingsService) {}

  openChangeEmailModal() {
    const dialogRef = this.dialog.open(ChangeEmailModalComponent, {
      width: '400px',
       // Largura do modal, personalize conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.newEmail) {
        // Chame o serviço para atualizar o email
        this.accountSettingsService.updateEmail(1, result.newEmail).subscribe(
          response => {
            // Lógica para tratamento de sucesso
            console.log('Email atualizado com sucesso', response);
          },
          error => {
            // Lógica para tratamento de erro
            console.error('Erro ao atualizar o email', error);
          }
        );
      }
    });
  }


  openChangePasswordModal() {
    const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
      width: '400px',
       // Largura do modal, personalize conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.newPassword) {
        // Chame o serviço para atualizar o email
        this.accountSettingsService.updatePassword(1, result.newPassword).subscribe(
          response => {
            // Lógica para tratamento de sucesso
            console.log('Senha atualizada com sucesso', response);
          },
          error => {
            // Lógica para tratamento de erro
            console.error('Erro ao atualizar o email', error);
          }
        );
      }
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
