import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'app/core/models/roles';
import { UsersService } from 'app/core/services/users/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  roles !: Role[];
  form !: FormGroup
  isLoading : boolean = false;

  constructor(
    private userService : UsersService,
    private fb : FormBuilder, 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.roles = this.route.snapshot.data['roles'];
    console.log(this.roles);
    this.form = this.fb.group({
      fullname: [null, {
        validators: [
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.required
        ]
      }],
      roleId: [null, {
        validators: [
          Validators.required
        ]
      }],
      email : [null, {
        validators: [
          Validators.email,
          Validators.maxLength(50),
          Validators.required
        ]
      }],
      password: [null, {
        validators: [
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.required
        ]
      }]
    });
  }
  
  get email() {
    return this.form.get('email');
  }
  
  get fullname() {
    return this.form.get('fullname');
  }
  
  get password() {
    return this.form.get('password');
  }
  
  get roleId() {
    return this.form.get('roleId');
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }

}
