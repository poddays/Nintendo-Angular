import { Component, Input, OnInit } from '@angular/core';
import { ArticlesCard } from "../../models/interface-article-card";

@Component({
  selector: 'nint-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.css']
})
export class ArticlesCardComponent implements OnInit {
  @Input() card!: ArticlesCard;
  @Input() isBig: boolean = false;
 

  constructor() { 
  }
  
  ngOnInit(): void {
    
  }

}
