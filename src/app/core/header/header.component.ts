import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nint-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
show:boolean = false;
display:boolean= true;
cross:boolean= false;
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

}
