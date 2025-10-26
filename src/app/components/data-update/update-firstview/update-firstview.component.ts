import { Component } from '@angular/core';

import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule , FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateDataService } from '../../../update-data.service';

@Component({
  selector: 'app-update-firstview',
  imports: [MatFormFieldModule, MatInputModule,ReactiveFormsModule, CommonModule],
  templateUrl: './update-firstview.component.html',
  styleUrl: './update-firstview.component.css'
})
export class UpdateFirstviewComponent {
  form!: FormGroup;
  headline!:string;

  constructor(
    private formbuilder: FormBuilder,
    private updateDataService:UpdateDataService
  ) {
    this.form = this.formbuilder.group({
      headline: [''],
      description: ['']
    });
  }
  
  save() {
    if (this.form.valid) {
      this.updateDataService.updateFirstView(this.form.value).subscribe()
      console.log(this.form.value)
    } else {
      console.warn('Formular ist ungültig');
    }
  }
}
