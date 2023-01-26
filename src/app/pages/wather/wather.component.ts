import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/interface/weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-wather',
  templateUrl: './wather.component.html',
  styleUrls: ['./wather.component.css']
})
export class WatherComponent implements OnInit {
  weather: Weather
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.loadWeather();
  }

  loadWeather(){
    /* this.weatherService.getWeather().subscribe(response =>{
      this.weather = response;
    }) */
    this.weather = {
      'city':'Santiago de Cali',
      'country':'Colombia',
      'humidity':'10',
      'temperature':'12',
      'time':'Soleado'
    }
  }

}
