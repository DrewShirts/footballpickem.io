import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterGuard } from '../register.guard';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFinishComponent } from './register-finish/register-finish.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
      { path: 'register/finish', component: RegisterFinishComponent, canActivate: [RegisterGuard]  }
    ]),

  ],
  declarations: [
      ConfirmEqualValidatorDirective,
      LoginComponent,
      RegisterComponent,
      RegisterFinishComponent
  ]
})
export class UsersModule { }
