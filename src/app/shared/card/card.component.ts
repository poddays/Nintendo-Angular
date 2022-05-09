
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { ICard,category,availability } from '../../models/interface-card';

@Component({
  selector: 'nint-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: ICard;

  constructor() {
  


  }

//Click del cuoricino
heartClicked(card:ICard){
      if (!card.heartBtn) {
       card.heartBtn = !card.heartBtn
      }
      else{
        card.heartBtn = !card.heartBtn
      }
}

  ngOnInit(): void {
    //setta TopBar con availability.free se il prezzo di un elemento è 0 
    
      if (this.card.price === 0 ) {
        this.card.topBar = availability.free;
      }
     else{
      this.card.topBar
     }
    

    //setta Now On sale bar se c'e Sale 
    
      if (this.card.sale) {
        this.card.topBar = availability.sale;
      }
      else{
        this.card.topBar
       }
    

      //Calcolo sconto
     
        let sale = this.card.sale
        if(sale){
         let molt= sale* this.card.price
         this.card.newPrice = this.card.price - molt/100 
         
        }
    }

}
