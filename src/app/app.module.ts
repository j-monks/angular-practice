import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsComponent } from "./persons/persons.component";
import { PersonInputComponent } from './persons/person-input.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,  // components that you want in a certain module
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule  // modules you would like to add to this module
  ],
  providers: [],
  bootstrap: [AppComponent] // root component
})
export class AppModule { }
