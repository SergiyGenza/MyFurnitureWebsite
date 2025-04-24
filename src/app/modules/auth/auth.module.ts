import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth.routing';



@NgModule({
    imports: [
    CommonModule,
    AuthRoutingModule,
    SignUpComponent,
    AuthComponent,
],
})
export class AuthModule { }
