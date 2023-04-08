import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component'; // Import WeatherComponent
import {ButtonComponent} from './button/button.component';
import {ChatbotComponent} from "./chatbot/chatbot.component"; // Import ButtonComponent

const routes: Routes = [
  { path: '', component: ButtonComponent }, // Set ButtonComponent as default route
  { path: 'weather', component: WeatherComponent }, // Add route for WeatherComponent
  { path: 'chatbot', component: ChatbotComponent }, // Add route for WeatherComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
