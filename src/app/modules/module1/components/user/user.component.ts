import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()user:{ name?: string; role?: string; color: string; }={color:''}
  @Output()clickDelete=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.clickDelete.emit(this.user.name)
  }
  onGreen(){
    // this.user
  }

}
