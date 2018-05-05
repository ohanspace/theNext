import { UserService } from './auth/user/user.service';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadingSpinner = false;

  constructor(
    private router: Router,
    private configService: AppConfigService,
    private userService: UserService,
    private authService: AuthService
  ) {
    authService.authState$.subscribe(user => {
      if (user) {
        userService.save(user);
        this.handleReturnUrl();
      }
    });
  }

  ngOnInit(): void {
    this.loadModule();

    this.setupLoadingSpinner();
  }

  private handleReturnUrl() {
    const returnUrl = localStorage.getItem('returnUrl');
    if (returnUrl) {
      localStorage.removeItem('returnUrl');
      this.router.navigateByUrl(returnUrl);
    }
  }

  private loadModule() {
    this.configService.getRouteConfig().subscribe(configs => {
      const conf = [];
      conf.push(configs, ...this.router.config);
      this.router.resetConfig(conf);
      console.log(this.router.config);
    });
  }

  private setupLoadingSpinner() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.loadingSpinnerOn();
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingSpinnerOff();
      }
    });
  }

  private loadingSpinnerOn() {
    this.loadingSpinner = true;
  }

  private loadingSpinnerOff() {
    this.loadingSpinner = false;
  }
}
