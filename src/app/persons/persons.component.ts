import { Component } from '@angular/core';
import { PersonsService } from "./persons.service";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html"
})

export class PersonsComponent {
  personList: string[];


  // constructor will run automaticlly whenever angular creates a new instance of this component (rendering)
  // type definition has to be the service, so angular can resolve the service
  // allowing PersonService to be made available inside the constructor
  constructor(prsService: PersonsService) {
    this.personList = prsService.persons;
  }
}
