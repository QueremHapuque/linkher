import { Component, Input } from '@angular/core';

import { UserService } from '../utils/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private userService: UserService
  ) {}

  @Input()
  email!: string;
  @Input()
  password!: string;
  @Input()
  confirmPassword!: string;

  public register() {
    if (!this.email || !this.password || !this.confirmPassword) {
      console.log('CAMPOS OBRIGATORIOS NAO PREENCHIDOS!!');
    }
    else if (this.password != this.confirmPassword) {
      console.log('AS SENHAS DIVERGEM!');
    }
    else {
      this.userService.createUser(this.email, this.password);
    }
  }

}
