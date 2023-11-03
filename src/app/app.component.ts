import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testangular';
  users: any;

  constructor( private userdata: ServiceService){
    console.log(userdata);
    this.users=userdata.user()

  }
}
