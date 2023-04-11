import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {ButtonComponent} from './button/button.component';
import {ChatbotComponent} from "./chatbot/chatbot.component";
import {FormDataComponent} from "./form-data/form-data.component";

const routes: Routes = [
  { path: '', component: ButtonComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'form-data', component: FormDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
