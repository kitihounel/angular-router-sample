import { Component, OnInit } from '@angular/core';

import { CRISES } from "./mock-crisis";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises = CRISES;

  constructor() {
  }

  ngOnInit(): void {
  }
}
