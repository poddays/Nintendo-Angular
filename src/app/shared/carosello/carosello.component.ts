import { Component, Input, OnInit } from '@angular/core';
import { ICard,availability,category } from '../../models/interface-card';
import{cardsList} from '../../models/cardList';
import { style } from '@angular/animations';

@Component({
  selector: 'nint-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.css','../card/card.component.css']
})
export class CaroselloComponent implements OnInit {
  showCards: boolean = false; 
  arrCard:ICard[] = cardsList;
   cont:number = 0;
   cont2:number = 0
   @Input() smallCard: boolean = false;


  caroselRight(){
    if (this.cont2 < cardsList.length/4 ) {
      let content = document.querySelector('#content');
      this.cont = this.cont - 870
      this.cont2 = this.cont2 + 1
      content?.setAttribute('style', `transform: translateX(${this.cont}px); transition:0.7s;`)
      if(this.cont2>cardsList.length/4  ){
        let right = document.querySelector('.freccia.right');
        right?.setAttribute('style', `display:none; transition:1s;`)
      }
    }
    if (this.cont< 0) {
        let left = document.querySelector('.freccia.left');
        left?.setAttribute('style', `display:block; transition:1s;`)
    }
    console.log(this.cont);  
  }
  
  caroselLeft(){
    let content = document.querySelector('#content');
    this.cont =this.cont + 870
    this.cont2 = this.cont2-1
    content?.setAttribute('style', `transform: translateX(${this.cont}px); transition:0.7s; `)
    if(this.cont2<cardsList.length/4  ){
      let right = document.querySelector('.freccia.right');
      right?.setAttribute('style', `display:block; transition:1s;`)
    }
    if (this.cont>= 0) {
      let left = document.querySelector('.freccia.left');
      left?.setAttribute('style', `display:none; transition:1s;`)
    }
    if (this.cont>= 0) {
      content?.setAttribute('style', `transform: translateX(${0}px);  transition:0.7s;`)
    }
    console.log(this.cont);
  }

  
  ngOnInit(): void {
    console.log(this.cont2);
    
   this.arrCard.splice(24,)
    if (this.cont === 25) {
      let left = document.querySelector('.freccia.left');
      left?.setAttribute('style', `display:none`)
    }
  }

}
