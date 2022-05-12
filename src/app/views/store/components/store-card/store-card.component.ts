import { Component, Input, OnInit } from '@angular/core';
import { IStoreCard } from '../../../../models/interface-store-card';
import { storeCard } from "../../../../models/storeCard";
@Component({
  selector: 'nint-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {
  @Input() storeCard!:IStoreCard
  constructor() { }

  ngOnInit(): void {
  }

}
