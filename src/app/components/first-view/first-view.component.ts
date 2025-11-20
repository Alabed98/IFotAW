import { Component, OnInit } from '@angular/core';
import { UpdateFirstViewService } from '../../services/update-first-view.service';
import { UpdateDataService } from '../../update-data.service';
import { FirstView } from '../../interfaces/first-view';

@Component({
  selector: 'app-first-view',
  imports: [],
  templateUrl: './first-view.component.html',
  styleUrl: './first-view.component.css'
})
export class FirstViewComponent {

  constructor (private updateDataService:UpdateDataService) { }

}
