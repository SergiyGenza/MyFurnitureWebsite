import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [RouterLink, ButtonComponent, ReactiveFormsModule],
})
export class AuthComponent implements OnInit {
  public readonly authService = inject(AuthService);
  public inputType: 'password' | 'text' = 'password';

  public form = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void { }

  public onTypeChange(): void {
    this.inputType == 'password'
      ? this.inputType = 'text'
      : this.inputType = 'password'
  }

  public onSubmit(): void {
    const { login, password } = this.form.controls;
    this.authService.SignIn(login.value!, password.value!)
  }

  public onGoogleAuth(): void {

  }
}
