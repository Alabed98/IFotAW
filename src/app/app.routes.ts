import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { CitiesComponent } from './components/cities/cities.component';
import { StatusCode404Component } from './components/status-code-404/status-code-404.component';

export const routes: Routes = [
    {path:'header',component:HeaderComponent},
    {path:'news', component:NewsComponent},
    {path:'cities', component:CitiesComponent},
    {path:'**', component:StatusCode404Component},

];
