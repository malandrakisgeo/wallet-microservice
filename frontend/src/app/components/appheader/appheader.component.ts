import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  title = 'Wallet microservice';
  subtitle = 'Sample CRUD application with Spring Boot and Angular';

  constructor() { }

  ngOnInit() {
  }

}
