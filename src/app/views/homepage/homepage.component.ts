import { Component, Input, OnInit } from '@angular/core';
import { ArticlesCard } from "../../models/interface-article-card";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  newsCard!: ArticlesCard[];
  smallCard:boolean = true;


  ngOnInit(): void {
    
  }

}
