import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from "./pages/pages-menu";


@Component({
  selector: 'w-chter-w-chter',
  templateUrl: './w-chter.component.html',
  styleUrls: ['./w-chter.component.scss']
})
export class WChterComponent{

  menu = MENU_ITEMS;

}
