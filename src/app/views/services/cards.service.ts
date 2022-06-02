import { Injectable } from '@angular/core';
import { ICard,category,availability } from '../../models/interface-card'
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cardsList: ICard[] = [
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/n/nintendo-switch-sports-switch/hero",
      title: "Nintendo Switch™ Sports",
      link:'https://www.nintendo.com/store/products/star-wars-the-force-unleashed-switch/',
      price:33.99,
      category: category.switch,
      topBar: availability.new,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
      title: "Kirby™ and the Forgotten Land",
      link:'https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/',
      price:59.99,
      category: category.switch,
      topBar: availability.freeDemo,
      
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/star-wars-the-force-unleashed-switch/hero",
      title: "STAR WARS™: The Force Unleashed™",
      link: 'https://www.nintendo.com/store/products/splatoon-2-octo-expansion-70070000001541-switch/',
      price:19.99,
      category: category.switch,
      topBar: availability.new,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
      title: "Mario Kart™ 8 Deluxe",
      link: 'https://www.nintendo.com/store/products/crunchyroll-switch/',
      price:59.99,
      category: category.switch,
      topBar: availability.new,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero",
      title: "Minecraft",
      link: 'https://www.nintendo.com/store/products/crunchyroll-switch/',
      price:29.99,
      category: category.switch,
      topBar: availability.now,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/t/the-elder-scrolls-v-skyrim-switch/hero",
      title: "The Elder Scrolls V: Skyrim",
      link: 'https://www.nintendo.com/store/products/crunchyroll-switch/',
      price:59.99,
      category: category.switch,
      topBar: availability.now,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/l/lego-star-wars-the-skywalker-saga-switch/hero",
      title: "LEGO® Star Wars™: The Skywalker Saga",
      link: 'https://www.nintendo.com/store/products/lego-star-wars-the-skywalker-saga-switch/',
      price:59.99,
      category: category.switch,
      topBar: availability.now,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/t/triangle-strategy-switch/hero",
      title: "TRIANGLE STRATEGY™",
      link: 'https://www.nintendo.com/store/products/triangle-strategy-switch/',
      price:59.99,
      category: category.switch,
      topBar: availability.freeDemo,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/crunchyroll-switch/hero",
      title: "Crunchyroll",
      link: 'https://www.nintendo.com/store/products/crunchyroll-switch/',
      price:0,
      category: category.switch,
      topBar: availability.now,
    },
  
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
      title: "Pokémon™ Legends: Arceus",
      link: 'https://www.nintendo.com/store/products/pokemon-legends-arceus-switch/',
      price:59.99,
      category: category.switch,
      topBar: availability.now,
    },
    {
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-party-superstars-switch/hero",
      title: "Mario Party™ Superstars",
      link: 'https://www.nintendo.com/store/products/mario-party-superstars-switch/',
      price:59.99,
      sale:20,
      category: category.switch,
      topBar: availability.now,
    },
  
  ]
    
getAll(): ICard[]{
  return this.cardsList
}
getNewGames():ICard[] {
  return this.cardsList.filter(card => card.topBar === availability.now)
}
getSales():ICard[] {
  return this.cardsList.filter(card => card.sale)
}
getFreeGames():ICard[]{
  return this.cardsList.filter(card => card.price <= 0)
}

  constructor() { }
}
