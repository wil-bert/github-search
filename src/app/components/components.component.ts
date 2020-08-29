import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  public githubUser:string;

  constructor() { }

  public searchUser(){

  }

  ngOnInit(): void {
  }

}
