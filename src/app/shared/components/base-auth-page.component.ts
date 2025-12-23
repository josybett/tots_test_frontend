import { inject } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { MCAuthModel } from '../entities/mc-auth-model';
import { signal } from "@angular/core";

export type MessageSeverity = 'success' | 'error' | 'info' | 'warn' | 'secondary' | 'contrast';

export interface AppMessage {
  severity?: MessageSeverity;
  text?: string;
}

export abstract class MCBaseAuthPage {
  private router = inject(Router);
  group = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  isSending = signal(false);

  messages = signal<Array<AppMessage>>([]);

  abstract onSubmit(obj: MCAuthModel): void;

  onClickSubmit() {
    if (this.isSending()) {
      return;
    }

    this.clearMessages();
    this.showLoading();

    // Navigate to spaces list
    this.router.navigate(['/spaces']);
  }

  showSuccessMessage(message: string) {
    this.messages.set([{ severity: 'success', text: message }]);
  }

  showErrorMessage(message: string) {
    this.messages.set([{ severity: 'error', text: message }]);
  }

  clearMessages() {
    this.messages.set([]);
  }

  showLoading() {
    this.isSending.set(true);
  }

  hideLoading() {
    this.isSending.set(false);
  }

  setEmailValue(value: string) {
    this.group.get('email')?.setValue(value);
  }
}