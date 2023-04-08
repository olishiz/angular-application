import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  formData = {name: '', password: ''};

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Make API request to retrieve weather data
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&appid=e2e7e8be51e6e8baeb58702fc4cd1713')
      .subscribe(data => {
        // Assign the retrieved weather data to the weatherData variable
        console.log(data)
        this.weatherData = data;
      });
  }

  submitForm() {
    // Perform POST request to 'submit-form' URL with form data
    this.http.post('http://localhost:3000/submit-form', this.formData).subscribe(
      (response) => {
        // Handle success response
        console.log('Form data submitted successfully:', response);
        // Reset form data
        this.formData = {name: '', password: ''};

        this.snackBar.open('Form data submitted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });

      },
      (error) => {
        // Handle error response
        console.error('Error submitting form data:', error);
      }
    );
  }

}
