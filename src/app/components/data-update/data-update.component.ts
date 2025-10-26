import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { UpdateFirstviewComponent } from "./update-firstview/update-firstview.component";
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { UpdateAboutComponent } from "./update-about/update-about.component";

@Component({
  selector: 'app-data-update',
  imports: [MatTabsModule, UpdateFirstviewComponent, UpdateAboutComponent],
  templateUrl: './data-update.component.html',
  styleUrl: './data-update.component.css'
})
export class DataUpdateComponent {
  constructor(private loginService:LoginService, private router:Router) {}

  logout(){
    this.loginService.logout().subscribe();
    this.router.navigate(['']);
    localStorage.setItem('loggedIn', 'false');
  } 
}
