import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// can inject services into other components (dependency injection)
@Injectable({ providedIn: 'root' }) // makes angular (the root) aware of this service
export class PersonsService {
  personsChanged = new Subject<string[]>(); // similar to eventEmitter
  persons: string[] = ["James", "Bob", "Jane"];

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons); // contains updated list of persons
  }

  removePerson(name: string) {
    // keeps every person with name when true / drops when false
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
