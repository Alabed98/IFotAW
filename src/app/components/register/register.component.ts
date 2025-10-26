import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule , FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, ReactiveFormsModule, CommonModule, MatInputModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form!:FormGroup;
  error:string = "Etwas ist schief gelaufen"
  constructor(private loginService:LoginService, private formBuilder:FormBuilder){
    this.form = this.formBuilder.group({
      username:[''],
      email:[''],
      password:['']
    })
  }
  submit(){
    this.loginService.register(
      this.form.get('username')?.value, 
    this.form.get('email')?.value, 
    this.form.get('password')?.value
    ).subscribe(data=> {
    
    })
 
  }

}