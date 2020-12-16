import { Injectable } from '@angular/core';

// can inject services into other components (dependency injection)
@Injectable({ providedIn: 'root' }) // makes angular (the root) aware of this service
export class PersonsService {
  persons: string[] = ["James", "Bob", "Jane"];

  addPerson(name: string) {
    this.persons.push(name);
  }
}
