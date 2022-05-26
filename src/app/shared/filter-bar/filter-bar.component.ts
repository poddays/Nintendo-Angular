import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nint-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})

export class FilterBarComponent implements OnInit {

  constructor() {
   
   }

  isNntBtnOpened = true;
  playerBtn = true;
  ratingBtn = true;
  priceBtn = true;
  seriesBtn = true;
  editBtn = true;
  gameBtn = true;
  aviBtn = true;
  platBtn = true;
 
  checkStatus(buttonStatus : boolean) : boolean{
      return !buttonStatus
  }

  

  ngOnInit(): void {
  }

}
