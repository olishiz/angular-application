import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {

  formData = {name: '', password: ''};

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

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
