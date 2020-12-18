import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from "./persons.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html"
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList!: string[];
  isFetching = false;
  private personListSubs!: Subscription;
  // private personService: PersonsService;

  // constructor will run automaticlly whenever angular creates a new instance of this component (rendering)
  // type definition has to be the service, so angular can resolve the service
  // allowing PersonService to be made available inside the constructor

  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
  }

  // using the ngOnInit lifecycle hook as its best practice (should contain all initialization tasks within instead of constructor)
  ngOnInit() {
    // listening for new value from personsChanged subject (eventEmitter in persons service e.g the updated persons list)
    // personListSubs is using a onDestroy lifecycle hook that prevents memory leaks (from subs piling up)
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      // whenever new persons are added to the list, isFetching is set to false again
      this.isFetching = false;
    });
    // before persons are fetched being fetched is set to true
    this.isFetching = true;
    this.prsService.fetchPerson();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() {
    // prevents memory leaks (should do this when working with subjects)
    this.personListSubs.unsubscribe();
  }
}
