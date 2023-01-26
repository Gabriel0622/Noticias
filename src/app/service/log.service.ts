import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Log } from '../interface/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private urlEndpoint = environment.urlApiNews;

  constructor(private http: HttpClient) { }

  getLogs():Observable<Log[]>{
    return this.http.get<Log[]>(`${this.urlEndpoint}`);
  }

}
