import { Component } from '@angular/core';
import { CONTACT } from 'src/app/common/mocks/contact';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  standalone: true,
  imports: [ ReactiveFormsModule, ButtonComponent]
})
export class ContactPageComponent {
  public readonly contact = CONTACT;

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required)
  });

  public onSubmit(): void {
    const { name, email, subject, message } = this.form.controls;
  }
}
