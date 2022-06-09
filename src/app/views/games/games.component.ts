import { Component, OnInit } from '@angular/core';
import { ICard } from '../../models/interface-card';
import { CardsService } from '../../views/services/cards.service';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  cards: ICard[] = [];
  changeArrow = true;
  
  constructor(private cardService: CardsService) { 
     
  }
  totalCard: ICard[] = this.cardService.getAll();

  ngOnInit(): void {
   this.cards = this.cardService.getAll().slice(0, 40);
         
  }

  openAll(){
    this.cards = this.cardService.getAll();    
  }

}
