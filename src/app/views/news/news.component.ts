import { Component, Input, OnInit } from '@angular/core';
import { ArticlesCard } from "../../models/interface-article-card";
import { newsCard } from "../../models/newList";
@Component({
  selector: 'nint-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  newsCard:ArticlesCard[] = newsCard;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
