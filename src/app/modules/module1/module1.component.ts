import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {

  //usersSubject = new BehaviorSubject
  
  users=[{
    name:'user1',
    role:'role1',
    color:'bg-red-300'
  },{
    name:'user2',
    role:'role1',
    color:'bg-red-300'
  },{
    name:'user3',
    role:'role2',
    color:'bg-red-300'
  },{
    name:'user4',
    role:'role2',
    color:'bg-red-300'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(event:string){
    this.users = this.users.filter(u=>u.name!=event);
  }
  

}
