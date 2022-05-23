import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  createapplication = false;

  p: number = 1;

  data = [ 
    {application_name:"Application name ", application_type:"Application type", application_dcsc:"Application type", application_port:"Application port", endpoint:"End point", host_server:"10.1.101.53"},
    {application_name:"Application name ", application_type:"Application type", application_dcsc:"Application type", application_port:"Application port", endpoint:"End point", host_server:"10.1.101.53"},
    {application_name:"Application name ", application_type:"Application type", application_dcsc:"Application type", application_port:"Application port", endpoint:"End point", host_server:"10.1.101.53"},
    {application_name:"Application name ", application_type:"Application type", application_dcsc:"Application type", application_port:"Application port", endpoint:"End point", host_server:"10.1.101.53"},
    {application_name:"Application name ", application_type:"Application type", application_dcsc:"Application type", application_port:"Application port", endpoint:"End point", host_server:"10.1.101.53"},
      
  ]

  constructor() { }

  ngOnInit(): void {
  }

  application(){
    this.createapplication = true

  }
  closeModal(){
    this.createapplication = false

  }

}
