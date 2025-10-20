import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/api';

  login(username:string, password:string){
    return this.http.post(`${this.apiUrl}/login`, {username, password});
  }

  register(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, { username, password, email:"die@gmail.com" });
  }

  getData(){ 
    return this.http.get(`${this.apiUrl}/getData`);
  }
}
