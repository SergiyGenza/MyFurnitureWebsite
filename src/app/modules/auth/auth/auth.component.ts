import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class AuthComponent {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
