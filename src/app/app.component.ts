import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TheNext';
  constructor(private router: Router, private configService: AppConfigService) {
  }
  ngOnInit(): void {
    console.log('app component init');
    this.loadModule();
  }

  loadModule() {
    this.configService.getRouteConfig().subscribe((configs) => {
      const conf = [];
      conf.push(configs, ...this.router.config);
      this.router.resetConfig(conf);
    });
  }

}
