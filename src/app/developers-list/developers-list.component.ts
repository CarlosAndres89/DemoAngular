import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit{


  @Input() lista: any[] = [];
  constructor() {}

  ngOnInit(): void {
    
  }

}
