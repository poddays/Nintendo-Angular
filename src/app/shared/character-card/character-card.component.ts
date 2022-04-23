import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Interface-Character-card';

@Component({
  selector: 'nint-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  characters: Character[] =[
    {
      title: "Super Mario",
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario?_a=AJADJWI0",
      background: "https://assets.nintendo.com/image/upload/dpr_auto,f_auto,q_auto:best/v1/ncom/en_US/merchandising/Character Portals/1600x1600_NCOM_Home_Characters_Mario_BG"
    },
    {
      title: "The Legend of Zelda",
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_TLOZ_BOTW?_a=ATAK9AA0",
      background :"https://assets.nintendo.com/image/upload/dpr_auto,f_auto,q_auto:best/v1/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_TLOZ_BOTW_BG"
    },
    {
      title: "Animal Crossing",
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Animal_Crossing?_a=ATAK9AA0",
      background :"https://assets.nintendo.com/image/upload/dpr_auto,f_auto,q_auto:best/v1/ncom/en_US/merchandising/Character Portals/1600x1600_NCOM_Home_Characters_Animal_Crossing_BG"
    },
    {
      title: "Kirby",
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby?_a=ATAK9AA0",
      background :"https://assets.nintendo.com/image/upload/dpr_auto,f_auto,q_auto:best/v1/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby_BG"
    },
]
  constructor() { }

  ngOnInit(): void {
  }

}
