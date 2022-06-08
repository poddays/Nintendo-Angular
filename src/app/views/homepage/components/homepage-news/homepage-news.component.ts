import { Component, OnInit } from '@angular/core';
import { ArticlesCard } from "../../../../models/interface-article-card";
import { newsCard } from "../../../../models/newList";

@Component({
  selector: 'nint-homepage-news',
  templateUrl: './homepage-news.component.html',
  styleUrls: ['./homepage-news.component.css']
})
export class HomepageNewsComponent implements OnInit {
  newsCard:ArticlesCard[] = newsCard;
  constructor() { }

  ngOnInit(): void {
  }

}
