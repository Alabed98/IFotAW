import { Component } from '@angular/core';
import { WebsiteComponent } from "./components/website/website.component";

@Component({
  selector: 'app-root',
  imports: [WebsiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IFotAW';
}
