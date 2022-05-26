import { Component, OnInit, } from '@angular/core';
import { ICard, category,availability  } from '../app/models/interface-card';

@Component({
  selector: 'nint-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nintendo';
  smallCard:boolean = true;

  shadow!: boolean ;

  changeShadow(newItem:boolean){
    this.shadow = newItem
  }
  

ngOnInit(): void {
   
    
}

  
constructor(){}

}




