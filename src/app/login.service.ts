import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, switchMap, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private http:HttpClient) { 
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.loggedIn.next(isLoggedIn);
  }
  currentUser: BehaviorSubject<any|null> = new BehaviorSubject(null);
  private apiUrl = 'https://dbifotaw.onrender.com';


  login(email:string, password:string){

    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`, { withCredentials: true })
      .pipe(
        switchMap(() => {      
            const xsrf = this.getCookie('XSRF-TOKEN');
            return this.http.post(`${this.apiUrl}/login`, { email, password }, { withCredentials: true, headers: new HttpHeaders({'X-XSRF-TOKEN': decodeURIComponent(xsrf || '')})})
            .pipe(tap(() => 
              {
                localStorage.setItem('loggedIn', 'true');
                this.loggedIn.next(true)
              }
            ))
        }),
  
        catchError(err => {
          console.error('Login fehlgeschlagen', err);
          return of(null);  
        })
      )
    } 


  logout(): Observable<any> {
    const xsrf = this.getCookie('XSRF-TOKEN');

    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true, headers: new HttpHeaders({'X-XSRF-TOKEN': decodeURIComponent(xsrf || '')}) })
      .pipe(
        tap(() => {
          console.log("wird gelöscht")
          this.loggedIn.next(false)
          localStorage.clear()  
        })
      )
  }

  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  register(name:string,email:string,password:string){
    const xsrf = this.getCookie('XSRF-TOKEN');

    return this.http.post(`${this.apiUrl}/register`, { name, email, password }, { withCredentials: true, headers: new HttpHeaders({'X-XSRF-TOKEN': decodeURIComponent(xsrf || '')}) })

  }
  getData(): Observable<any>{ 
    return this.http.get(`${this.apiUrl}/getData`,  { withCredentials: true });
  }

  
  isAuthenticated(): boolean {
    return this.loggedIn.value;
  }

}
