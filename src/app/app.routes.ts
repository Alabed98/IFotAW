import { Routes } from '@angular/router';
import { StatusCode404Component } from './components/status-code-404/status-code-404.component';
import { WebsiteComponent } from './components/website/website.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataUpdateComponent } from './components/data-update/data-update.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',component:WebsiteComponent},
    {path:'login', component:LoginComponent},
    {path:'registeration', component:RegisterComponent},
    {path:'admin', component:DataUpdateComponent, canActivate:[AuthGuard]},
    {path:'**', component:StatusCode404Component},

];
