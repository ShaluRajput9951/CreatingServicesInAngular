import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  user(){
  return [
    {
      name: " shalu" , class: " 12th"
    },
    { name:" Rudra" , class: " 70"}
  ]
  }
}
