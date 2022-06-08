import { Component,  Input,  OnInit } from '@angular/core';






@Component({
  selector: 'nint-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 
  constructor() { 

  }

  ngOnInit(): void {
  }

 @Input() label!:string;
 @Input() iconUrl!:string;
 


  
}
 
 
  


