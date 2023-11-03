import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users: { name: string; class: string; }[];
  constructor( private userdata: ServiceService){
    console.log(userdata)
    this.users=userdata.user();

  }

}
