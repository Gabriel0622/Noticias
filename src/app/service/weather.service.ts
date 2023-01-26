import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../interface/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private urlEndpoint = environment.urlApiWeather;
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  constructor(private http: HttpClient) { }

  getWeather():Observable<Weather>{
    return this.http.get<Weather>(`${this.urlEndpoint}`);
  }
}
