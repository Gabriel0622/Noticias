import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/interface/log';
import { LogService } from 'src/app/service/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs: Log[];

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.loadLogs();
  }

  loadLogs():void{
    this.logService.getLogs().subscribe(response =>{
      this.logs = response;
    })
  }

}
