import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nint-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
<<<<<<< HEAD

=======
  showGames: boolean = false;
  showSwitch: boolean = false;
  showNStore: boolean = false;
  showPlayNint: boolean = false;

   gamesDrop = document.querySelector('.games-drop');
>>>>>>> giovanni
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======

  showMeGames(): void {
      if (this.showSwitch === true || this.showNStore===true || this.showPlayNint===true) {
        this.showGames = !this.showGames;
        this.showSwitch = false;
        this.showNStore = false;
        this.showPlayNint = false;
      }else{
        this.showGames = !this.showGames;
      }
      
  }
  
  showMeSwitch(): void {
    if (this.showGames === true) {
      this.showSwitch = !this.showSwitch;
      this.showGames = false;
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

  clickedOutside(): void{
    this.showGames = false;
  }

>>>>>>> giovanni
}
