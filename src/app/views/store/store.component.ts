import { Component, OnInit } from '@angular/core';
import { IStoreCard } from '../../models/interface-store-card';
import { storeCard } from "../../models/storeCard";
@Component({
  selector: 'nint-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  arrStoreCard:IStoreCard[] = storeCard;
 smallCard:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
