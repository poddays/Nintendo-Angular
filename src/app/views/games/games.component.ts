import { Component, OnInit } from '@angular/core';
import { ICard } from '../../models/interface-card';
import { CardsService } from '../../views/services/cards.service';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  cards: ICard[] = []

 constructor(private cardService: CardsService) { }

  ngOnInit(): void {
 this.cards = this.cardService.getAll()
  }

}
