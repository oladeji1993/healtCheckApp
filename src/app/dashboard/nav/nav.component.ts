import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

 
  data: {
    name: string,
    server: string
  }[] = new Array(4).fill(
    {
      name: 'App Name',
      server: 'server'
    }
  )



  createModal=false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.createModal = true
  }

  closeModal(){
    this.createModal = false

  }

}
