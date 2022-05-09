import { Component, Input, OnInit } from '@angular/core';
import { INavButton, } from '../../../../models/interface-navButton';
import { LinkDrop } from "../../../../models/interface-link-dropdown";


@Component({
  selector: 'nint-drop-menu',
  templateUrl: './drop-menu.component.html',
 
  styleUrls: ['./drop-menu.component.css']
})
export class DropMenuComponent implements OnInit {
  linkButtons: INavButton[] =[]
   

  constructor() { 
    this.linkButtons = [
      {
        id: 1,
        title: 'Nintendo Switch games',
        imgSvg:'assets/svg/switch-small.svg',
        link:''
      },
      {
        id: 1,
        title: 'New releases',
        imgSvg:'assets/svg/newRelease-small.svg',
        link:''
      },
    ]




  }

  ngOnInit(): void {
   


  }

 

}
