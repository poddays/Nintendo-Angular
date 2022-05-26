import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nint-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showGames: boolean = false;
  showSwitch: boolean = false;
  showNStore: boolean = false;
  showPlayNint: boolean = false;
  showShadow:boolean = false;

  @Output() newShadowEvent = new EventEmitter<boolean>()


  callShadow(event:boolean){
    event = this.showShadow
    if ( this.showGames === true ||  this.showSwitch === true || this.showNStore === true || this.showPlayNint === true ) {
      this.newShadowEvent.emit(event = true)
    }
    else{
      this.newShadowEvent.emit(event = false)
    }
  }



   gamesDrop = document.querySelector('.games-drop');

  constructor() { }

  ngOnInit(): void {
  }

  showMeGames(): void {
      if (this.showSwitch === true ) {
        this.showGames = !this.showGames;
        this.showSwitch = false;
        this.showShadow = true;
      }else{
        this.showGames = !this.showGames;
      }
      
  }
  
  showMeSwitch(): void {
    if (this.showGames === true) {
      this.showSwitch = !this.showSwitch;
      this.showGames = false;
      this.showShadow = true;
    }else{
      this.showSwitch = !this.showSwitch;
    }
  }

  showMePlayNint(){
    if (this.showSwitch === true || this.showNStore===true || this.showGames===true) {
      this.showPlayNint = !this.showPlayNint;
      this.showSwitch = false;
      this.showNStore = false;
      this.showGames = false;
    }else{
      this.showPlayNint = !this.showPlayNint;
    }
    
    
  } 


}
