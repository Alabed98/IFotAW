import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule , FormBuilder, Validators } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, ReactiveFormsModule, CommonModule, MatInputModule, RouterLink, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!:FormGroup;
  passwordReadable:boolean = false;

  constructor(private loginService:LoginService, private formBuilder:FormBuilder, private router:Router){
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  submit(){
    this.loginService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(
      () => this.router.navigate(['/admin'])
    )
  }

  showPassword(){
    this.passwordReadable = !this.passwordReadable;
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password')
  }

  passwordValidator(){

  }
}
