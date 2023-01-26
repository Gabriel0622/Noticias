import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndpoint = environment.urlApiUser;
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http: HttpClient) { }

  authUser(user:User):Observable<boolean>{
    return this.http.post<boolean>(`${this.urlEndpoint}`, user, {headers:this.httpHeaders});
  }

}
