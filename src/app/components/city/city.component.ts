import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  @Input() city!:string | null;

}
