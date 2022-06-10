import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterBar{
    gameType: Array<string> = [
        'Action','Adventure','Arcade','Board game','Education','Fighting','First-Person','Lifestyle','Multiplayer','Music',
        'Other','Party','Platformer','Puzzle','Racing','Role-Playing','Simulation','Sports','Strategy','Training'
    ]
    characters: Array<string> = [
        'Animal Crossing','Donkey Kong','Fire Emblem','Kirby','Link','Luigi','Mario','Metroid','Other','Peach','Pikachu','Pokémon',
        'Princess Peach','Samus','Splatoon','Super Mario','The Legend of Zelda','Toad','Yoshi','Zelda'
    ]
    price: Array<string>=[
        'Free to start','$0 - $9.99','$10 - $19.99','$20 - $39.99','$40 - $59.99','$60+'
    ]
}