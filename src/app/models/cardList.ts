import { ICard,category,availability } from '../models/interface-card'

cardsList: ICard[];

    this.cardsList = [
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/n/nintendo-switch-sports-switch/hero",
        title: "Nintendo Switch™ Sports",
        price:33.99,
        category: category.switch,
        topBar: availability.new,
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
        title: "Kirby™ and the Forgotten Land",
        price:59.99,
        category: category.switch,
        topBar: availability.freeDemo,
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/star-wars-the-force-unleashed-switch/hero",
        title: "STAR WARS™: The Force Unleashed™",
        price:19.99,
        category: category.switch,
        topBar: availability.new,
      },
      {
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
        title: "Mario Kart™ 8 Deluxe",
        price:59.99,
        category: category.switch,
        topBar: availability.new,
      },
    ]
