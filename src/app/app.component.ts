import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, DeviceService } from './services';

@Component({
  selector: 'pchy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public auth: AuthService,
    public deviceService: DeviceService,
    private router: Router
  ) {}

  onLogoutClick(): void {
    this.auth.signOut();
  }

  onAccountClick(): void {
    this.router.navigate(['account']);
  }

  onBackClick(): void {
    window.history.back();
  }
}
