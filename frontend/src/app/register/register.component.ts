import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../utils/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  @Input()
  email!: string;
  @Input()
  password!: string;
  @Input()
  confirmPassword!: string;

  showNotification(severity: string, summary: string, message: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: message });
  }

  register() {
    if (!this.email || !this.password || !this.confirmPassword) {
      console.log('CAMPOS OBRIGATORIOS NAO PREENCHIDOS!!');
    }
    else if (this.password != this.confirmPassword) {
      console.log('AS SENHAS DIVERGEM!');
    }
    else {
      this.userService.createUser(this.email, this.password).subscribe(
        async (response) => {
          console.log('Sucesso:', response);
          this.showNotification('success', 'Usuário criado com sucesso!', 'Faça login para continuar.');
          await this.delay(3000);
          this.router.navigateByUrl('login', { replaceUrl: true });
        },
        (error) => {
          console.error('Erro:', error.error.message);
          this.showNotification('error', 'Erro!', error.error.message);
        }
      );
    }
  }

  public delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
}
