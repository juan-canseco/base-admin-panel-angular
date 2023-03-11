import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

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
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  
  public login() :  void {
    
    if (!this.form.valid) {
      console.log('invalid');
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
        console.log(err);
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
