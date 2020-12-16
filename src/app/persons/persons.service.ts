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
}
