import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// can inject services into other components (dependency injection)
@Injectable({ providedIn: 'root' }) // makes angular (the root) aware of this service
export class PersonsService {
  personsChanged = new Subject<string[]>(); // similar to eventEmitter
  persons!: string[];

  constructor(private http: HttpClient) {}

  fetchPerson() {
    this.http
      .get<any>('https://swapi.dev/api/people/')
      .pipe(
        map(resData => {
          return resData.results.map((character: any) => character.name);
        })
      )
      .subscribe((transformedData) => {
        this.personsChanged.next(transformedData);
      });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons); // contains updated list of persons
  }

  removePerson(name: string) {
    // keeps every person with name when true / drops when false
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
