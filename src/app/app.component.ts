import { Component } from '@angular/core';



class Person {
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  female = new Person('Jane Doe', 'f', 5);
  male = new Person('John Doe', 'm', 4);

  person;

  pickRAndomPerson(){
    const index = Math.floor(Math.random());

  }


  
}
