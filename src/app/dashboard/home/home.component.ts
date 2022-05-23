import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  p: number = 1;

  data = [ 
    {application:"Application name goes here", servers:"3 servers", scan_date:"11/12/20 3: 57:29 PM", status:"Healthy"},
    {application:"Application name goes here", servers:"2 servers", scan_date:"11/12/20 3: 57:29 PM", status:""},
    {application:"Application name goes here", servers:"2 servers", scan_date:"11/12/20 3: 57:29 PM", status:""},
    {application:"Application name goes here", servers:"1 servers", scan_date:"11/12/20 3: 57:29 PM", status:""},
    {application:"Application name goes here", servers:"3 servers", scan_date:"11/12/20 3: 57:29 PM", status:""},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
