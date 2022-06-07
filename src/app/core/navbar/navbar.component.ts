import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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
  @Input() showShadow:boolean = false;

  @Output() newShadowEvent = new EventEmitter<boolean>()
shadow:boolean = false

  callShadow(event:boolean){
    event = this.showShadow
    if ( this.showGames === true ||  this.showSwitch === true || this.showNStore === true || this.showPlayNint === true ) {
      this.newShadowEvent.emit(event = true)
    }
    else{
      this.newShadowEvent.emit(event = false)
      
    }
  }
  closeShadow(){
     this.shadow = false
      this.showSwitch = false;
      this.showNStore = false;
      this.showPlayNint = false;
      this.showGames = false
  }
  
 

   gamesDrop = document.querySelector('.games-drop');

  constructor() { }

  ngOnInit(): void {


  }

  showMeGames(): void {
    if (this.showPlayNint === true || this.showNStore===true || this.showSwitch===true) {
      this.showGames = !this.showGames;
      this.showSwitch = false;
      this.showNStore = false;
      this.showPlayNint = false;
      
    }else{
      this.showGames = !this.showGames;
      this.shadow = !this.shadow
    }
      
  }
  
  showMeSwitch(): void {
    if (this.showPlayNint === true || this.showNStore===true || this.showGames===true) {
      this.showSwitch = !this.showSwitch;
      this.showGames = false;
      this.showNStore = false;
      this.showPlayNint = false;
    }else{
      this.showSwitch = !this.showSwitch;
      this.shadow = !this.shadow
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
      this.shadow = !this.shadow
    }
    
    
  } 

showMeNintStore(){
  if (this.showSwitch === true || this.showPlayNint===true || this.showGames===true) {
    this.showNStore = !this.showNStore;
    this.showSwitch = false;
    this.showPlayNint = false;
    this.showGames = false;
  }else{
    this.showNStore = !this.showNStore;
    this.shadow = !this.shadow
  }
}

closeAll(){
    this.showSwitch = false;
    this.showPlayNint = false;
    this.showGames = false;
    this.showPlayNint = false;
  
}



}
