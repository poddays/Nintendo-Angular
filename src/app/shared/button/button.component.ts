import { Component, OnInit } from '@angular/core';
import { IButton } from './button';



@Component({
  selector: 'nint-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

 
  button : IButton = {
    text: 'Shop Now',

  }
  

  constructor() { 

  }

  ngOnInit(): void {
  }

}
