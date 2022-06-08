import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nint-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})

export class FilterBarComponent implements OnInit {

  constructor() {
   
   }

  isNntBtnOpened = false;
  playerBtn = false;
  ratingBtn = false;
  priceBtn = false;
  seriesBtn = false;
  editBtn = false;
  gameBtn = false;
  aviBtn = false;
  platBtn = false;
 
  checkStatus(buttonStatus : boolean) : boolean{
      return !buttonStatus
  }

  

  ngOnInit(): void {
  }

}
