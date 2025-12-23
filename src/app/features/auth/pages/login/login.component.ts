import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { MCBaseAuthPage } from '../../../../shared/components/base-auth-page.component';
import { MCAuthModel } from '../../../../shared/entities/mc-auth-model';
import { MCBaseAuthPageConfig } from '../../../../shared/entities/mc-base-auth-page-config';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule, IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    MessageModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends MCBaseAuthPage {
  config = input<MCAuthBasicConfig>({
    title: 'Iniciar Sesión',
    subtitle: 'Por favor, ingrese sus datos',
    emailPlaceholder: 'Correo electrónico',
    passwordPlaceholder: 'Contraseña',
    submitButton: 'Iniciar Sesión',
    resetPassword: '¿Olvidó su contraseña?',
    register: '¿No tiene una cuenta? Regístrese',
  });
  submit = output<MCAuthModel>();

  onSubmit(obj: MCAuthModel): void {
    this.submit.emit(obj);
  }
}

export class MCAuthBasicConfig extends MCBaseAuthPageConfig {
  subtitle?: string;

  emailPlaceholder?: string;
  passwordPlaceholder?: string;

  submitButton?: string;

  resetPassword?: string;
  resetPasswordLink?: string;

  register?: string;
  registerLink?: string;
}
