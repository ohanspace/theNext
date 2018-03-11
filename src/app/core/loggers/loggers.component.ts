import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-loggers',
  templateUrl: './loggers.component.html',
  styleUrls: ['./loggers.component.css']
})
export class LoggersComponent implements OnInit {
  constructor(public loggerService: LoggerService) { }

  ngOnInit() {
  }

  onAllClear() {
    this.loggerService.clear();
  }
}

