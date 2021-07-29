import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

@Input() users:{ name?: string; role?: string; color: string;}[]=[]
@Output() dltUser=new EventEmitter<string>()
  constructor() { }

  
  ngOnInit(): void {
    console.log(this.users);
  }

  deleteUser(event:string){
    // console.log(event);
    this.dltUser.emit(event);
  }
}
