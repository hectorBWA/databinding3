import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  
}

let male = 'm';
let female = 'f';

class Person {
  name: string = "Hector" ;
  gender: any = male ;
  rating: number = 10 ;
  }