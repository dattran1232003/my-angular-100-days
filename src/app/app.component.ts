import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  user = {
    toString() {
      return `Name: ${this.name}, age: ${this.age}.` 
    },
    name: 'Dat',
    age: 18,
  };

  // data binding
  
}
