import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

const routes: Routes = [
  { path: '', component: PersonsComponent }, // every object is a definition of a route ()
  { path: 'input', component: PersonInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // main routes of our app]
  exports: [RouterModule]
})


export class AppRoutingModule {

}
