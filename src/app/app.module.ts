import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from "./persons/persons.component";
import { PersonInputComponent } from './persons/person-input.component';

@NgModule({
  declarations: [
    AppComponent,  // components that you want in a certain module
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule  // modules you would like to add to this module
  ],
  providers: [],
  bootstrap: [AppComponent] // root component
})
export class AppModule { }
