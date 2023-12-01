import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../utils/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  @Input()
  email!: string;
  @Input()
  password!: string;

  login() {
    if (!this.email || !this.password) {
      this.showNotification('warn', 'Atenção!', 'Campo(s) obrigatório(s) não preenchido(s)!');
    }
    else {
      this.userService.login(this.email, this.password).subscribe(
        async (response) => {
          console.log('Sucesso:', response);
          this.showNotification('success', 'Login realizado com sucesso!', 'Seja bem vinda.');
          const token = response.token;
          this.userService.setAuthToken(token);
          await this.delay(4000);
          this.router.navigateByUrl('home', { replaceUrl: true });
        },
        (error) => {
          console.error('Erro:', error.error.message);
          this.showNotification('error', 'Erro!', error.error.message);
        }
      );
    }
  }

  showNotification(severity: string, summary: string, message: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: message });
  }

  public delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
}
