import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // html tag you can use in your app (root component)
  templateUrl: './app.component.html', // what html should render when the component is mounted
  styleUrls: ['./app.component.css'] // holds an array of paths of css files that should be applied to this components template (app.component.css)
})
export class AppComponent {
  persons: string[] = ["James", "Bob", "Jane"];
}
