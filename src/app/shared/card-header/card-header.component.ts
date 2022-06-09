import { Component, Input, OnInit } from '@angular/core';
import { IheaderCard } from 'src/app/models/headerCards';


@Component({
  selector: 'nint-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {
  cards:IheaderCard[] = [
    {
  image:"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_600/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
  
  title:"Kirby™ and the Forgotten Land",
  
  },
  {
    image:"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_600/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
    title:"Pokémon™ Legends: Arceus",
  
  } ,
  {image:"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_600/ncom/en_US/games/switch/m/metroid-dread-switch/hero",
  title:"Metroid™ Dread"}, 
  {image:"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_600/ncom/en_US/games/switch/n/nintendo-switch-sports-switch/hero",
  title:"Nintendo Switch™ Sports"},
  ]
  constructor() {}
  
//Click del cuoricino
heartClicked(card:[]){
     // if (!card.heartBtn) {
    //   card.heartBtn = !card.heartBtn
    //  }
    //  else{
       // card.heartBtn = !card.heartBtn
      }


  ngOnInit(): void {
   
    
   
    }

}
