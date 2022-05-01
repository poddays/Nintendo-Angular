import { Component, Input, OnInit, Output } from '@angular/core';
import { ICard,category,availability } from '../../models/interface-card';

@Component({
  selector: 'nint-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: ICard;
  cardsList: ICard[];
  
  constructor() {
  
    this.cardsList = [
      
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/n/nintendo-switch-sports-switch/hero",
        title: "Nintendo Switch™ Sports",
        link:'https://www.nintendo.com/store/products/nintendo-switch-sports-switch/',
        price:33.99,
        category: category.switch,
        topBar: availability.new,
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
        title: "Kirby™ and the Forgotten Land",
        link:'https://www.nintendo.com/store/products/kirby-and-the-forgotten-land-switch/',
        price:59.99,
        category: category.switch,
        topBar: availability.freeDemo,
      
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/star-wars-the-force-unleashed-switch/hero",
        title: "STAR WARS™: The Force Unleashed™",
        link:'https://www.nintendo.com/store/products/star-wars-the-force-unleashed-switch/',
        price:19.99,
        category: category.switch,
        topBar: availability.new,
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
        title: "Mario Kart™ 8 Deluxe",
        link:'https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/',
        price:59.99,
        category: category.switch,
        topBar: availability.now,
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/dlc/switch-dlc/splatoon-2-plus-nintendo-switch-online-individual-membership-12-months-dlc/bundles/splatoon-2-octo-expansion/image",
        title: "Splatoon™ 2: Octo Expansion ",
        link: 'https://www.nintendo.com/store/products/splatoon-2-octo-expansion-70070000001541-switch/',
        price:19.99,
        category: category.switch,
        topBar: availability.dlc,
        
       
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/crunchyroll-switch/hero",
        title: "Crunchyroll",
        link: 'https://www.nintendo.com/store/products/crunchyroll-switch/',
        price:0,
        category: category.switch,
        topBar: availability.now,
        
      },
    ]

  }

heartClicked(){
  for (let i = 0; i < this.cardsList.length; i++) {
      if (!this.cardsList[i].heartBtn) {
        this.cardsList[i].heartBtn = !this.cardsList[i].heartBtn
      }
      else{
        this.cardsList[i].heartBtn = !this.cardsList[i].heartBtn
      }
}
}


  ngOnInit(): void {
    //setta TopBar con availability.free se il prezzo di un elemento è 0 
    for (let i = 0; i < this.cardsList.length; i++) {
      if (this.cardsList[i].price === 0 ) {
        this.cardsList[i].topBar = availability.free;
      }
     else{
      this.cardsList[i].topBar
     }
    }

    
      //Calcolo sconto
      for (let i = 0; i < this.cardsList.length; i++) {
        let sale = this.cardsList[i].sale
       
        if(sale){
         let molt= sale* this.cardsList[i].price
         this.cardsList[i].newPrice = this.cardsList[i].price - molt/100 
         
        }
    }

  }

}
