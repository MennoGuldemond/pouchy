import { Component } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'pchy-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor(public auth: AuthService) {}
}
