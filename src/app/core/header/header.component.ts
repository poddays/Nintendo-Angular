import { Component, Input, OnInit } from '@angular/core';
import { IheaderCard } from 'src/app/models/headerCards';


@Component({
  selector: 'nint-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
show:boolean = false;
display:boolean= true;
cross:boolean= false;
showLoginBar:boolean = false;




  constructor() { }

  ngOnInit(): void {
  }
onClick():any{
  this.show = true;
  this.display=false;
  this.cross= true;
}
hide():any{
  this.show = false;
  this.display=true;
  this.cross= false;
}

FadeInLoginBar(){
  this.showLoginBar = !this.showLoginBar
}


}
