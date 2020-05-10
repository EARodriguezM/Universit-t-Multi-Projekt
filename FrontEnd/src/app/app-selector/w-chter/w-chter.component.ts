import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from "./pages/pages-menu";

@Component({
  selector: 'login-api-w-chter',
  templateUrl: './w-chter.component.html',
  styleUrls: ['./w-chter.component.scss']
})
export class WChterComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
