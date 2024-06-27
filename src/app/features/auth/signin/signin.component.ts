import { Component, OnInit, inject } from '@angular/core';
import { userLoginFormConfig } from '../../../core/configs';
import { pipe, takeUntil } from 'rxjs';
import { EssentialComponent } from '../../../core/essentialComponent';
import { LoginInfo } from '../../../core/models';
import { LOGGEDIN_ROOT } from '../../../core/tokens';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent extends EssentialComponent implements OnInit {
  signInFormConfig = userLoginFormConfig;
  loginRoute = inject(LOGGEDIN_ROOT);
  authService = inject(AuthService)

  ngOnInit() {
   // gestiamo il caso in cui l'utente è già loggato
  }
  signIn(loginInfo: LoginInfo) {
    // effettuiamo il login
    this.authService.login()
    this.router.navigate([this.loginRoute]);
  }
}
