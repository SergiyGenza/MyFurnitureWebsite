import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class SignUpComponent {
  constructor(
    public authService: AuthService
  ) { }
}
