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
export class FirstViewComponent implements OnInit {

  headline = "";
  description = "";


  constructor (private updateDataService:UpdateDataService) { }

  async ngOnInit() {
    
    this.updateDataService.getFirstViewData().subscribe({
      next:(data:FirstView) => {
        this.headline = data.headline || 'الاتحاد الدولي للعالم العربي';;
        this.description =data.description ||'بناء الجسور بين الثقافات، وتعزيز الحوار والتعاون من أجل مستقبل أفضل';
      },
      error:err=> {
        console.error("Error loding data", err);
        this.headline = 'الاتحاد الدولي للعالم العربي';
        this.description = 'بناء الجسور بين الثقافات، وتعزيز الحوار والتعاون من أجل مستقبل أفضل';
      }
    })

    
  }




}
