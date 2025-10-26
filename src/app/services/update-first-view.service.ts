import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirstView } from '../interfaces/first-view';

@Injectable({
  providedIn: 'root'
})
export class UpdateFirstViewService {

  constructor() { }
  data = new BehaviorSubject<FirstView>(
    {
      description: 'بناء الجسور بين الثقافات، وتعزيز الحوار والتعاون من أجل مستقبل أفضل', 
      headline: 'الاتحاد الدولي للوطن العربي'
    }
  );

  currentData$ =this.data.asObservable();

  setData(newData:FirstView){
    this.data.next(newData);
  }
}
