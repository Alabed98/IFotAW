import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FirstView } from './interfaces/first-view';
import { AboutUs } from './interfaces/aboutUs';
@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  constructor(private http:HttpClient) { }
  private url = "http://127.0.0.1:8000";
  xsrf = this.getCookie('XSRF-TOKEN');
  updateFirstView(data:FirstView){
    return this.http.post(`${this.url}/updateFirstView`, { headline:data.headline ,description:data.description }, { withCredentials: true, headers: new    HttpHeaders({'X-XSRF-TOKEN': decodeURIComponent(this.xsrf || '')}), responseType: 'json'} ) 
  }  
  
  getFirstViewData(){
    return this.http.get<FirstView>(`${this.url}/getFirstViewData`, {withCredentials:true, headers:new HttpHeaders({'X-XSRF-TOKEN': decodeURIComponent(this.xsrf || '')})})
  }

  updateAboutUsData(data:AboutUs){
    return this.http.post(`${this.url}/updateAboutUsData`, {headline:data.headline, aboutUs:data.aboutUs, description:data.description}, {withCredentials:true, headers:new HttpHeaders({'X-XSRF-TOKEN': decodeURIComponent(this.xsrf || '')})})
  }
  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }



  getAboutUsData(){
    const xsrf = this.getCookie('XSRF-TOKEN');
    return this.http.get<FirstView>(`${this.url}/getFirstViewData`, {withCredentials:true, headers:new HttpHeaders({'X-XSRF-TOKEN': decodeURIComponent(xsrf || '')})})
  }
}
