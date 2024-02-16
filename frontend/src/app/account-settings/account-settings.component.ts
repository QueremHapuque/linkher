import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { ChangeEmailModalComponent } from '../change-email-modal/change-email-modal.component';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { DeleteAccountModalComponent } from '../delete-account-modal/delete-account-modal.component';
import { AccountSettingsService } from '../utils/services/acconut-settings.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private accountSettingsService: AccountSettingsService,
    private router: Router,
    private messageService: MessageService,

  ) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  currentPasswordFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  disableName = false;
  disableEmail = true;
  disableState = false;
  currentEmail!: string | null;
  newEmail!: string | '';
  currentPassword!:|string | '';
  newPassword!: string | '';
  confirmNewPassword!: string | '';


  ngOnInit() {
    this.currentEmail = localStorage.getItem('USER_EMAIL');
    console.log('this.currentEmail -> ', this.currentEmail)
    const userToken = localStorage.getItem('TOKEN');
    if (!userToken) {
      this.router.navigateByUrl('', { replaceUrl: true });
    }
  }

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'Este campo é obrigatório!';
    }
    if (this.currentPasswordFormControl.hasError('required')) {
      return 'Este campo é obrigatório!';
    }
    if (this.passwordFormControl.hasError('required')) {
      return 'Este campo é obrigatório!';
    }
    if (this.confirmPasswordFormControl.hasError('required')) {
      return 'Este campo é obrigatório!';
    }
    return this.emailFormControl.hasError('email') ? 'Esse não é um email válido!' : '';
  }

  showNotification(severity: string, summary: string, message: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: message });
  }

  changeEmail() {
    this.accountSettingsService.updateEmail(this.newEmail).subscribe(
      response => {
        // Lógica para tratamento de sucesso
        console.log('Email atualizado com sucesso', response);
        this.showNotification('success', 'Currículo atualizado com sucesso!', '');
      },
      error => {
        // Lógica para tratamento de erro
        console.error('Erro ao atualizar o email', error);
        this.showNotification('error', 'Erro!', error.error.message);
      }
    );
  }

  // função antiga para chamada da api
  updatePassword() {
    if (this.newPassword != this.confirmNewPassword) {
      console.log("As senhas divergem!")
    }
    else {
      this.accountSettingsService.updatePassword(1, this.newPassword).subscribe(
        response => {
          // Lógica para tratamento de sucesso
          console.log('Senha atualizada com sucesso', response);
        },
        error => {
          // Lógica para tratamento de erro
          console.error('Erro ao atualizar o senha', error);
        }
      );
    }
  }

  // nova função para chamada de api
  updatePasswordd() {
    this.accountSettingsService.updatePasswordd(this.currentPassword, this.newPassword).subscribe(
      response => {
        // Lógica para tratamento de sucesso
        console.log('Senha atualizada com sucesso', response);
      },
      error => {
        // Lógica para tratamento de erro
        console.error('Erro ao atualizar o senha', error);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('', { replaceUrl: true });
  }

  openChangeEmailModal() {
    const dialogRef = this.dialog.open(ChangeEmailModalComponent, {
      width: '400px',
       // Largura do modal, personalize conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.newEmail) {
        // Chame o serviço para atualizar o email
        this.accountSettingsService.updateEmail(result.newEmail).subscribe(
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
