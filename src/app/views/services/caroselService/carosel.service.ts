import { Injectable } from '@angular/core';
import { ICard} from '../../../models/interface-card';
import { CardsService } from '../../../views/services/cards.service';
@Injectable({
  providedIn: 'root'
})


export class CaroselService {

  arrCard: ICard[] = [];
  constructor(private cardService: CardsService){}
  ngOnInit(): void {
    this.arrCard = this.cardService.getAll() //Inserimento card tramite servizisio CardsService
  
      console.log(this.cont2);
     this.arrCard.splice(24,)
      if (this.cont === 25) {
        let left = document.querySelector('.freccia.left');
        left?.setAttribute('style', `display:none`)
      }
    }
  cont:number = 0;
  cont2:number = 0;
 caroselRight(){
   if (this.cont2 < this.arrCard.length/4 - 0.5 ) {
     let content = document.querySelector('.content');
     this.cont = this.cont - 870
     this.cont2 = this.cont2 + 1
     content?.setAttribute('style', `transform: translateX(${this.cont}px); transition:0.7s;`)
     if(this.cont2>this.arrCard.length/4  ){
       let right = document.querySelector('.freccia.right');
       right?.setAttribute('style', `display:none; transition:1s;`)
       
     }
   }
   if (this.cont< 0) {
       let left = document.querySelector('.freccia.left');
       let smallLeft = document.querySelector('.smallLeft');
       left?.setAttribute('style', `display:block; transition:1s;`)
       smallLeft?.setAttribute('style', `display:block; transition:1s;`)
   }
   console.log(this.cont);  
 }
 
 caroselLeft(){
   let content = document.querySelector('.content');
   this.cont =this.cont + 870
   this.cont2 = this.cont2-1
   content?.setAttribute('style', `transform: translateX(${this.cont}px); transition:0.7s; `)
   if(this.cont2<this.arrCard.length/4  ){
     let right = document.querySelector('.freccia.right');
     right?.setAttribute('style', `display:block; transition:1s;`)
   }
   if (this.cont>= 0) {
     let left = document.querySelector('.freccia.left');
     let smallLeft = document.querySelector('.smallLeft');
     left?.setAttribute('style', `display:none; transition:1s;`)
     smallLeft?.setAttribute('style', `display:none; transition:1s;`)
   }
   if (this.cont>= 0) {
     content?.setAttribute('style', `transform: translateX(${0}px);  transition:0.7s;`)
   }
   console.log(this.cont);
 }



}
