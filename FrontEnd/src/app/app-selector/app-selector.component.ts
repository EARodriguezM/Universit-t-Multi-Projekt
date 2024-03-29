import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'w-chter-app-selector',
  templateUrl: './app-selector.component.html',
  styleUrls: ['./app-selector.component.scss']
})
export class AppSelectorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTeachersRanking(){
    this.router.navigate(['app/teachers_ranking']);
  }
  goW_chter(){
    this.router.navigate(['/app/w-chter']);  
  }

}
