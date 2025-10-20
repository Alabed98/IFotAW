import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FirstViewComponent } from "../first-view/first-view.component";
import { UsComponent } from "../us/us.component";
import { VisionComponent } from "../vision/vision.component";
import { CitiesComponent } from "../cities/cities.component";
import { NewsComponent } from "../news/news.component";
import { ContactComponent } from "../contact/contact.component";
import { MembershipComponent } from "../membership/membership.component";

@Component({
  selector: 'app-website',
  imports: [HeaderComponent, FirstViewComponent, UsComponent, VisionComponent, CitiesComponent, NewsComponent, ContactComponent, MembershipComponent],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {

}
