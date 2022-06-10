import { Component, OnInit } from '@angular/core';
import { FilterBar } from '../../views/services/filter-bar.service';

@Component({
  selector: 'nint-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})

export class FilterBarComponent implements OnInit {
  gameType:Array<string> = [];
  characters:Array<string> = [];
  price: Array<string> = []

  constructor(private filterBar: FilterBar) {
   this.gameType = this.filterBar.gameType
   this.characters = this.filterBar.characters
   this.price = this.filterBar.price
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
  showLess = false;
  showCharacters = false;
  showPrice = false
 
  checkStatus(buttonStatus : boolean) : boolean{
      return !buttonStatus
  }

  

  ngOnInit(): void {
    this.gameType = this.filterBar.gameType.slice(0, 5);
    this.characters = this.filterBar.characters.slice(0, 5);
    this.price = this.filterBar.price.slice(0, 5);
  }

  showMore(){    
    this.gameType = this.filterBar.gameType;
    this.showLess = !this.showLess
  }

  showLessFunction(){
    this.gameType = this.filterBar.gameType.slice(0, 5);
    this.showLess = !this.showLess
  }

  showMoreCharacters(){    
    this.characters = this.filterBar.characters;
    this.showCharacters = !this.showCharacters
  }

  showLessCharacters(){
    this.characters = this.filterBar.characters.slice(0, 5);
    this.showCharacters = !this.showCharacters
  }

  showMorePrice(){    
    this.price = this.filterBar.price;
    this.showPrice = !this.showPrice
  }

  showLessPrice(){
    this.price = this.filterBar.price.slice(0,5);
    this.showPrice = !this.showPrice
  }

}
