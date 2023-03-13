import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, 
              private router : Router,
              private authService : AuthService) { }

  form! : FormGroup;
  loading : boolean = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, {
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(50)
        ]
      }],
      password: [null, {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ]
      }]
    })
  }


  
  onSubmit() : void {
    
    if (!this.form.valid) {
      return;
    }
    
    this.loading = true;
    this.authService.login({email: this.email.value, password : this.password.value})
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: err =>  {
        this.loading = false;
        
      }
    });

  }



  get email() {return this.form.get('email');}
  get password()  {return this.form.get('password')};

  emailErrorMessage() : string {
    if (this.email.errors?.['required']) {
      return "Email is required.";
    }
    return "Error";
  }

}
