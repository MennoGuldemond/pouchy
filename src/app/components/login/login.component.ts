import { Component } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'pchy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public auth: AuthService) {}
}
