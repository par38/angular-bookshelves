import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  errorMessage: string
  // passwordRegex= /^\w{6,}$/g

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          // + ne fonctionne pas > placé en AuthService + signup.html
          // Validators.pattern('/^\w{6,}$/g')
        ]
      ]
    })
  }

  onSubmit() {
    const email = this.signupForm.get('email').value
    const password = this.signupForm.get('password').value

    this.authService.createNewUser(email, password)
      .then(
        () => {
          this.router.navigate(['/books'])
        },
        (error) => {
          this.errorMessage = error
        }
        )
      
  }

}
