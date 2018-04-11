import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, 
    private configService: AppConfigService, 
    private authService: AuthService) {

      authService.user$.subscribe(user => {
        if (user) {
          const returnUrl = localStorage.getItem('returnUrl');
          if (returnUrl) {
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
          }
        }
      });
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
