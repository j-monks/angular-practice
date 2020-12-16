import { Injectable, Output, EventEmitter } from '@angular/core';

// can inject services into other components (dependency injection)
@Injectable({ providedIn: 'root' }) // makes angular (the root) aware of this service
export class PersonsService {
  @Output() personCreate = new EventEmitter<string>();
  persons: string[] = ["James", "Bob", "Jane"];
  enteredPersonName = "";

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }

  removePerson(name: string) {
    // keeps every person with name when true / drops when false
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    console.log(this.persons);
  }
}
