import { Component, Input, OnInit } from '@angular/core';
import { ArticlesCard } from "../../models/interface-article-card";
import { newsCard } from "../../models/newList";
@Component({
  selector: 'nint-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
 label:string="Load more"
  icon:string="https://www.google.com/search?q=icon+plus+white&rlz=1C1CHBF_itIT995IT997&sxsrf=ALiCzsaG-3YetZtXQwCA7aC-TqZCt3XdKQ:1654588389194&tbm=isch&source=iu&ictx=1&vet=1&fir=ODiaJcO3RaklAM%252CLrRRxWHbKJE3OM%252C_%253B_QHLHiQ5gxGQNM%252CY5EDpQ7Z0ia9yM%252C_%253BZpicorOcYc0paM%252CTL5fDzS9ijWsOM%252C_%253BvhhAdLAxYxUsSM%252CFBP50at4T3sIwM%252C_%253BU1PLQkJ00p4J-M%252CQhvZh_nBwr6h4M%252C_%253BDYViR6dx6kIj8M%252CK4GQ6CZMXETAYM%252C_%253BEeBwPhN9X-ksSM%252CLYwR86dC5Gl-VM%252C_%253BHQuPZ3KBIXbAmM%252CB1qkFYOr6HfJkM%252C_%253BxKqbLGslPc4IbM%252CkhQRskJkVd6VHM%252C_%253BQhvB88aqNUJxAM%252C_H4jqsbVmOGA4M%252C_%253BGIN8lzmzDBpQvM%252Cq3j96m14ObgDUM%252C_%253BODUYz94PC6b0UM%252CKCI-tf5rNp3fYM%252C_%253B6nRsdoo9v16yYM%252CgTPUQOmCKFWVpM%252C_%253BSt_UlQLDVMnJQM%252CvrRZ6VMkAt-3pM%252C_%253BQbYuUAFupX3K9M%252C9atJxz8E9ml0AM%252C_%253B9JRTSZZ3N_EHWM%252CcZvGBZdFCJEpSM%252C_&usg=AI4_-kR5QxvLTgEXus-ka2bkRvMl9-VBBw&sa=X&ved=2ahUKEwiYs7-J7pr4AhVli_0HHZcuAiAQ9QF6BAghEAE#imgrc=U1PLQkJ00p4J-M";
showBtn=true;
background=false;
    newsCard:ArticlesCard[] = [
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/explore-battle-and-build-with-the-latest-game-trial-dragon-quest-builders-2/1920x1080_LHA-546_EN_v01?_a=AJADJWI0",
        date : new Date(2022,0,22),
        titolo : 'Explore, battle, and build with the latest Game Trial, DRAGON QUEST BUILDERS 2!',
        description:"Join forces with the mysterious Malroth and build a ravaged world into the realm of your dreams. From 4/20 at 10 a.m. PT to 4/26 at 11:59 p.m. PT,...",
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/pre-order-available-heres-a-release-date-and-new-trailer-for-xenoblade-chronicles-3/backup_1280x720_Switch_News_XC3?_a=AJADJWI0",
        date : new Date(2022,10,22),
        titolo : 'Xenoblade Chronicles 3 gets a new trailer and release date!',
        description:"A vast world awaits in the Xenoblade Chronicles™ 3 game, and you won’t need to wait too much longer to play it. Originally announced to release in...",
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/play-the-29-th-maximus-cup-online-event-and-you-could-earn-an-in-game-kirby-and-the-forgotten-land-theme/MKG_T99_29thMaximusCup_EN?_a=AJADJWI0",
        date : new Date(2021,18,4),
        titolo : 'Play the 29th MAXIMUS CUP online event and you could earn an in-game Kirby and the...',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-online-expansion-pack-mario-golf-is-now-available/1920x1080_NSO_april?_a=AJADJWI0",
        date : new Date(2022,3,18),
        titolo : 'Nintendo Switch Online + Expansion Pack: Mario Golf is now available!',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/when-it-comes-to-eggs-these-games-are-no-yolk/1920x1080_Ncom?_a=AJADJWI0",
        date : new Date(2022,0,22),
        titolo : 'When it comes to eggs, these games are no yolk!',
        
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/stock-up-on-quality-games-for-free/800x450_Switch_News_F2P_EN?_a=AJADJWI0",
        date : new Date(2022,4,12),
        titolo : 'Stock up on quality games—for free!',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/a-jrpg-classic-is-finally-coming-to-north-america-this-july-watch-a-new-trailer/800x450_Switch_News_LVA_3?_a=AJADJWI0",
        date : new Date(2022,2,22),
        titolo : 'A JRPG classic is finally coming to North America this July! Watch a new trailer',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/experience-the-fight-to-save-humanity-from-13-different-perspectives-in-13-sentinels-aegis-rim/1280x720_Switch_News_13S?_a=AJADJWI0",
        date : new Date(2022,2,22),
        titolo : 'Experience the fight to save humanity from 13 different perspectives in 13 Sentinels...',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/check-out-the-latest-trailer-for-fire-emblem-warriors-three-hopes/1280x720_Switch_News_FE_PV2?_a=AJADJWI0",
        date : new Date(2022,11,4),
        titolo : 'Check out the latest trailer for Fire Emblem Warriors: Three Hopes!',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/use-your-mii-characters-in-these-games/1920x1080_GamesWithMiis",
        date : new Date(2022,30,5),
        titolo : 'Use your Mii characters in these games!',
        readMore: "Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/test-your-skills-online-with-the-mario-strikers-battle-league-first-kick-demo-event/FirstKick",
        date:new Date(2022/12/4),
        titolo:'Test Your Skills Online with the Mario Strikers: Battle League First Kick Demo Event!',
        readMore:"Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/mobilenews-pick-a-side-in-the-peach-vs-bowser-tour/N.com_Peach_vs._Bowser",
        date:new Date(2022/2/10),
          titolo:'Pick a side in the Peach vs. Bowser Tour!',
          readMore:"Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/familiar-faces-tear-up-the-battlefield-in-these-action-packed-videos/1280x720_Switch_news_3Hopes_3videos",
        date:new Date(2022/10/4),
        titolo:'Familiar faces tear up the battlefield in these action-packed videos!',
        readMore:"Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/try-it-for-free-even-if-youve-tried-it-before/LHA-589-Ncom_v02",
        date:new Date(2021/10/4),
        titolo:'Try it for free—even if you’ve tried it before!',
        readMore:"Read More",
      },


    ]

    loadMore:ArticlesCard[] = [
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/explore-battle-and-build-with-the-latest-game-trial-dragon-quest-builders-2/1920x1080_LHA-546_EN_v01?_a=AJADJWI0",
        date : new Date(2022,0,22),
        titolo : 'Explore, battle, and build with the latest Game Trial, DRAGON QUEST BUILDERS 2!',
        description:"Join forces with the mysterious Malroth and build a ravaged world into the realm of your dreams. From 4/20 at 10 a.m. PT to 4/26 at 11:59 p.m. PT,...",
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/pre-order-available-heres-a-release-date-and-new-trailer-for-xenoblade-chronicles-3/backup_1280x720_Switch_News_XC3?_a=AJADJWI0",
        date : new Date(2022,10,22),
        titolo : 'Xenoblade Chronicles 3 gets a new trailer and release date!',
        description:"A vast world awaits in the Xenoblade Chronicles™ 3 game, and you won’t need to wait too much longer to play it. Originally announced to release in...",
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/play-the-29-th-maximus-cup-online-event-and-you-could-earn-an-in-game-kirby-and-the-forgotten-land-theme/MKG_T99_29thMaximusCup_EN?_a=AJADJWI0",
        date : new Date(2021,18,4),
        titolo : 'Play the 29th MAXIMUS CUP online event and you could earn an in-game Kirby and the...',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-online-expansion-pack-mario-golf-is-now-available/1920x1080_NSO_april?_a=AJADJWI0",
        date : new Date(2022,3,18),
        titolo : 'Nintendo Switch Online + Expansion Pack: Mario Golf is now available!',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/when-it-comes-to-eggs-these-games-are-no-yolk/1920x1080_Ncom?_a=AJADJWI0",
        date : new Date(2022,0,22),
        titolo : 'When it comes to eggs, these games are no yolk!',
        
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/stock-up-on-quality-games-for-free/800x450_Switch_News_F2P_EN?_a=AJADJWI0",
        date : new Date(2022,4,12),
        titolo : 'Stock up on quality games—for free!',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/a-jrpg-classic-is-finally-coming-to-north-america-this-july-watch-a-new-trailer/800x450_Switch_News_LVA_3?_a=AJADJWI0",
        date : new Date(2022,2,22),
        titolo : 'A JRPG classic is finally coming to North America this July! Watch a new trailer',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/experience-the-fight-to-save-humanity-from-13-different-perspectives-in-13-sentinels-aegis-rim/1280x720_Switch_News_13S?_a=AJADJWI0",
        date : new Date(2022,2,22),
        titolo : 'Experience the fight to save humanity from 13 different perspectives in 13 Sentinels...',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/check-out-the-latest-trailer-for-fire-emblem-warriors-three-hopes/1280x720_Switch_News_FE_PV2?_a=AJADJWI0",
        date : new Date(2022,11,4),
        titolo : 'Check out the latest trailer for Fire Emblem Warriors: Three Hopes!',
        readMore: "Read More",
      },
      {
        image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/use-your-mii-characters-in-these-games/1920x1080_GamesWithMiis",
        date : new Date(2022,30,5),
        titolo : 'Use your Mii characters in these games!',
        readMore: "Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/test-your-skills-online-with-the-mario-strikers-battle-league-first-kick-demo-event/FirstKick",
        date:new Date(2022/12/4),
        titolo:'Test Your Skills Online with the Mario Strikers: Battle League First Kick Demo Event!',
        readMore:"Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/mobilenews-pick-a-side-in-the-peach-vs-bowser-tour/N.com_Peach_vs._Bowser",
        date:new Date(2022/2/10),
          titolo:'Pick a side in the Peach vs. Bowser Tour!',
          readMore:"Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/familiar-faces-tear-up-the-battlefield-in-these-action-packed-videos/1280x720_Switch_news_3Hopes_3videos",
        date:new Date(2022/10/4),
        titolo:'Familiar faces tear up the battlefield in these action-packed videos!',
        readMore:"Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/try-it-for-free-even-if-youve-tried-it-before/LHA-589-Ncom_v02",
        date:new Date(2021/10/4),
        titolo:'Try it for free—even if you’ve tried it before!',
        readMore:"Read More",
      },


      {

        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS",
         date:new Date(2021/18/4),
          titolo:'Ask the Developer Vol. 5, Nintendo Switch Sports–Part 1',
          readMore:"Read More",
  },
  {
  
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS",
     date:new Date(2021/20/4),
      titolo:'Ask the Developer Vol. 5, Nintendo Switch Sports–Part 2',
      readMore:"Read More",
  },
  {
  
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS",
     date:new Date(2021/20/4),
      titolo:'Ask the Developer Vol. 5, Nintendo Switch Sports–Part 3',
      readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220526/NSS_Header_Week6_Global",
    date:new Date(2022/20/4),
      titolo:'In-game rewards: Week of May 26, 2022',
      readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220519/NSS_Header_Week5_Global",
    date:new Date(2022/25/4),
      titolo:'In-game rewards: Week of May 19, 2022',
      readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/games/switch/p/pokemon-home-switch/hero",
    date:new Date(2022/25/12),
      titolo:'Pokémon HOME can now be linked with more Pokémon games!',
      readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/mobilenews-pick-a-side-in-the-peach-vs-bowser-tour/N.com_Peach_vs._Bowser",
    date:new Date(2022/2/10),
      titolo:'Pick a side in the Peach vs. Bowser Tour!',
      readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/a-new-mario-strikers-battle-league-video-is-here-to-assist-with-more-info/EN_800x450",
    date:new Date(2022/25/11),
      titolo:'A new Mario Strikers: Battle League video is here to assist with more info!',
      readMore:"Read More",
  },
  {
    image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-online-expansion-pack-mario-golf-is-now-available/1920x1080_NSO_april?_a=AJADJWI0",
    date : new Date(2022,3,18),
    titolo : 'Nintendo Switch Online + Expansion Pack: Mario Golf is now available!',
    readMore: "Read More",
  },
  {
    image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/when-it-comes-to-eggs-these-games-are-no-yolk/1920x1080_Ncom?_a=AJADJWI0",
    date : new Date(2022,0,22),
    titolo : 'When it comes to eggs, these games are no yolk!',
    
    readMore: "Read More",
  },
  {
    image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/stock-up-on-quality-games-for-free/800x450_Switch_News_F2P_EN?_a=AJADJWI0",
    date : new Date(2022,4,12),
    titolo : 'Stock up on quality games—for free!',
    readMore: "Read More",
  },
  {
    image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/a-jrpg-classic-is-finally-coming-to-north-america-this-july-watch-a-new-trailer/800x450_Switch_News_LVA_3?_a=AJADJWI0",
    date : new Date(2022,2,22),
    titolo : 'A JRPG classic is finally coming to North America this July! Watch a new trailer',
    readMore: "Read More",
  },
  {
    image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/experience-the-fight-to-save-humanity-from-13-different-perspectives-in-13-sentinels-aegis-rim/1280x720_Switch_News_13S?_a=AJADJWI0",
    date : new Date(2022,2,22),
    titolo : 'Experience the fight to save humanity from 13 different perspectives in 13 Sentinels...',
    readMore: "Read More",
  },
  {
    image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/check-out-the-latest-trailer-for-fire-emblem-warriors-three-hopes/1280x720_Switch_News_FE_PV2?_a=AJADJWI0",
    date : new Date(2022,11,4),
    titolo : 'Check out the latest trailer for Fire Emblem Warriors: Three Hopes!',
    readMore: "Read More",
  },
  {
    image : "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/use-your-mii-characters-in-these-games/1920x1080_GamesWithMiis",
    date : new Date(2022,30,5),
    titolo : 'Use your Mii characters in these games!',
    readMore: "Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/test-your-skills-online-with-the-mario-strikers-battle-league-first-kick-demo-event/FirstKick",
    date:new Date(2022/12/4),
    titolo:'Test Your Skills Online with the Mario Strikers: Battle League First Kick Demo Event!',
    readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/mobilenews-pick-a-side-in-the-peach-vs-bowser-tour/N.com_Peach_vs._Bowser",
    date:new Date(2022/2/10),
      titolo:'Pick a side in the Peach vs. Bowser Tour!',
      readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/familiar-faces-tear-up-the-battlefield-in-these-action-packed-videos/1280x720_Switch_news_3Hopes_3videos",
    date:new Date(2022/10/4),
    titolo:'Familiar faces tear up the battlefield in these action-packed videos!',
    readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/try-it-for-free-even-if-youve-tried-it-before/LHA-589-Ncom_v02",
    date:new Date(2021/10/4),
    titolo:'Try it for free—even if you’ve tried it before!',
    readMore:"Read More",
  },


  {

    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS",
     date:new Date(2021/18/4),
      titolo:'Ask the Developer Vol. 5, Nintendo Switch Sports–Part 1',
      readMore:"Read More",
},
{

image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS",
 date:new Date(2021/20/4),
  titolo:'Ask the Developer Vol. 5, Nintendo Switch Sports–Part 2',
  readMore:"Read More",
},
{

image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/ask-the-developer-vol-5-nintendo-switch-sports/1920x1080_ATD_NSS",
 date:new Date(2021/20/4),
  titolo:'Ask the Developer Vol. 5, Nintendo Switch Sports–Part 3',
  readMore:"Read More",
},
{
image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220526/NSS_Header_Week6_Global",
date:new Date(2022/20/4),
  titolo:'In-game rewards: Week of May 26, 2022',
  readMore:"Read More",
},
{
image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220519/NSS_Header_Week5_Global",
date:new Date(2022/25/4),
  titolo:'In-game rewards: Week of May 19, 2022',
  readMore:"Read More",
},
{
image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/games/switch/p/pokemon-home-switch/hero",
date:new Date(2022/25/12),
  titolo:'Pokémon HOME can now be linked with more Pokémon games!',
  readMore:"Read More",
},
{
image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/mobilenews-pick-a-side-in-the-peach-vs-bowser-tour/N.com_Peach_vs._Bowser",
date:new Date(2022/2/10),
  titolo:'Pick a side in the Peach vs. Bowser Tour!',
  readMore:"Read More",
},
{
image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/a-new-mario-strikers-battle-league-video-is-here-to-assist-with-more-info/EN_800x450",
date:new Date(2022/25/11),
  titolo:'A new Mario Strikers: Battle League video is here to assist with more info!',
  readMore:"Read More",
},
{
  image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/v1/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220519/NSS_Header_Week5_Global",
  date:new Date(2022/25/4),
    titolo:'In-game rewards: Week of May 19, 2022',
    readMore:"Read More",
  },
  {
    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/nintendo-hits-the-road-this-summer-with-an-interactive-nintendo-switch-experience-for-kids-and-families/RTE",
    date:new Date(2022/22/6),
      titolo:'Nintendo Hits the Road This Summer With an Interactive Nintendo Switch Experience for Kids and Families',
      readMore:"Read More",
    },
    {
      image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/mobilenews-slink-around-gcn-baby-park-in-the-cat-tour-happening-meow/N.com_Cat_Tour_0531",
      date:new Date(2022/6/6),
        titolo:'Slink around GCN Baby Park in the Cat Tour, happening meow!',
        readMore:"Read More",
      },
      {
        image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220526/NSS_Header_Week6_Global",
        date:new Date(2022/26/5),
          titolo:'In-game rewards: Week of May 26, 2022',
          readMore:"Read More",
        },
        {
          image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220526/NSS_Header_Week6_Global",
          date:new Date(2022/26/5),
            titolo:'In-game rewards: Week of May 26, 2022',
            readMore:"Read More",
          },
          {
            image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/mobilenews-pick-a-side-in-the-peach-vs-bowser-tour/N.com_Peach_vs._Bowser",
            date:new Date(2022/18/5),
              titolo:'Pick a side in the Peach vs. Bowser Tour!',
              readMore:"Read More",
            },
            {
              image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/nintendo-switch-sports-weekly-items/20220512/NSS_Header_Week4_Global",
              date:new Date(2022/12/5),
                titolo:'In-game rewards: Week of May 12, 2022',
                readMore:"Read More",
              },
              {
                image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/make-room-for-june-delights-in-animal-crossing-pocket-camp/2205304banner_Option_2",
                date:new Date(2022/2/6),
                  titolo:'Make room for June delights in Animal Crossing: Pocket Camp',
                  readMore:"Read More",
                },
                {
                  image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/mobilenews-is-there-a-doctor-tour-in-the-house-why-yes/N.com_Doctor_Tour_0503",
                  date:new Date(2022/4/5),
                    titolo:'Is there a Doctor Tour in the house? (Why, yes!)',
                    readMore:"Read More",
                  },
                  {
                    image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/rocket-league-introduces-limited-time-knockout-mode/RL-KnockoutImage-1",
                    date:new Date(2022/27/4),
                      titolo:'Rocket League introduces limited-time Knockout mode',
                      readMore:"Read More",
                    },
                    {
                      image:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/articles/2022/celebrate-mothers-day-with-a-bouquet-of-delightful-activities-and-special/1920x1080_Ncom_WN_MothersDay",
                      date:new Date(2022/1/5),
                        titolo:'Celebrate Mother’s Day with a bouquet of delightful activities & special savings',
                        readMore:"Read More",
                      },
  

    ]

    constructor() {} 

  ngOnInit(): void { 
  }


loadMoreImg():any{

  let newLength = this.newsCard.length;
  if (newLength < this.loadMore.length) {
      newLength = this.newsCard.length+8
  }
   this.newsCard = this.loadMore.slice(0, newLength);
}
btnClicked():void{
  this.newsCard = this.loadMore.slice(32, 50);
  this.showBtn = false;
}
displayAll():void{
  this.newsCard = this.loadMore.slice(0, 18);
  this.background=true;
  this.showBtn = true;
}
displayGames():void{
  this.newsCard = this.loadMore.slice(0,18);
  this.background=true;
  this.showBtn = true;
}

}


