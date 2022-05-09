import { Component, OnInit } from '@angular/core';
import { ICard,availability,category } from '../../models/interface-card';
import{cardsList} from '../../models/cardList';
import { style } from '@angular/animations';

@Component({
  selector: 'nint-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.css']
})
export class CaroselloComponent implements OnInit {
  showCards: boolean = false; 
  arrCard:ICard[] = cardsList;
   cont:number = 0;
 


  caroselRight(){
    let content = document.querySelector('#content');
   this.cont = this.cont - 49
    content?.setAttribute('style', `transform: translateX(${this.cont}%); transition:0.7s;`)
    if (this.cont < -50) {
      this.cont = -49
      content?.setAttribute('style', `transform: translateX(${this.cont}%); transition:0.7s;`)
    }
    if (this.cont< 0) {
        let left = document.querySelector('.freccia.left');
        left?.setAttribute('style', `display:block`)
      }
      console.log(this.cont);
      
  }
  caroselLeft(){
    let content = document.querySelector('#content');
    this.cont =this.cont + 49
   
    content?.setAttribute('style', `transform: translateX(${this.cont}%); transition:0.7s; `)
    if (this.cont>= 0) {
      let left = document.querySelector('.freccia.left');
      left?.setAttribute('style', `display:none`)
    }
    if (this.cont>= 0) {
      content?.setAttribute('style', `transform: translateX(${0}%);  transition:0.7s;`)
    }
    console.log(this.cont);
  }

  
  ngOnInit(): void {
    if (this.cont === 25) {
      let left = document.querySelector('.freccia.left');
      left?.setAttribute('style', `display:none`)
    }
  }

}
