import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  createServer = false

  p: number = 1;

  data = [ 
    {server_name:"server name goes here", ip_address:"IP Address goes here", cpu:"85.6", memory:"73.9", storage:"50"},
    {server_name:"server name goes here", ip_address:"IP Address goes here", cpu:"85.6", memory:"73.9", storage:"50"},
    {server_name:"server name goes here", ip_address:"IP Address goes here", cpu:"85.6", memory:"73.9", storage:"50"},
    {server_name:"server name goes here", ip_address:"IP Address goes here", cpu:"85.6", memory:"73.9", storage:"50"},
    {server_name:"server name goes here", ip_address:"IP Address goes here", cpu:"85.6", memory:"73.9", storage:"50"},
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

  createserver(){
    this.createServer = true

  }

  closeModal(){
    this.createServer = false

  }

}
