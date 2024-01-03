import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  httpData:any;
  constructor(public usersServiceObj:UsersService){}
  ngOnInit():void{
    this.usersServiceObj.getUsers()
    .subscribe((users)=>{
      this.httpData=users;
      console.log(this.httpData)
    })
  }
}
