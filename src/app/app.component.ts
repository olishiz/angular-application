import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-application';

  constructor(private router: Router) {}

  navigateToWeather() {
    this.router.navigate(['/weather']); // Navigate to /weather route
  }
}
