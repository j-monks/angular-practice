import { Component, OnInit } from '@angular/core';
import { PersonsService } from "./persons.service";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html"
})

export class PersonsComponent implements OnInit {
  personList: string[];
  // private personService: PersonsService;

  // constructor will run automaticlly whenever angular creates a new instance of this component (rendering)
  // type definition has to be the service, so angular can resolve the service
  // allowing PersonService to be made available inside the constructor

  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
  }

  // using the ngOnInit lifecycle hook as its best practice (should contain all initialization tasks within instead of constructor)
  ngOnInit() {
    this.personList = this.prsService.persons;
  }
}
