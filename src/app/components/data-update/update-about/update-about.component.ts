import { Component } from '@angular/core';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule , FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateDataService } from '../../../update-data.service';

@Component({
  selector: 'app-update-about',
  imports: [MatFormFieldModule, MatInputModule,ReactiveFormsModule, CommonModule],
  templateUrl: './update-about.component.html',
  styleUrl: './update-about.component.css'
})
export class UpdateAboutComponent {
  form!:FormGroup;
  constructor(private fb:FormBuilder, private updateDataService:UpdateDataService){
    this.form = this.fb.group({
      headline: ['', Validators.required],
      aboutUs: ['', Validators.required],
      descriptions:this.fb.array([])
    })
  }

  get descriptions():FormArray{
    return this.form.get('descriptions') as FormArray;
  }

  addInputField(){
    this.descriptions.push(new FormControl('', { nonNullable: true, validators: Validators.required }));
  }
  removeInputFiled(index:number){
    this.descriptions.removeAt(index)
  }
  save(){
    this.updateDataService.updateAboutUsData(this.form.value).subscribe();
  }
}
