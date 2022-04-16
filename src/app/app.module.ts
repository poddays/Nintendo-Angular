import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { StoreComponent } from './views/store/store.component';
import { SwitchComponent } from './views/switch/switch.component';
import { NewsComponent } from './views/news/news.component';
import { SupportComponent } from './views/support/support.component';
import { AccountComponent } from './views/account/account.component';
import { CardComponent } from './shared/card/card.component';
import { ButtonComponent } from './shared/button/button.component';
import { CharacterCardComponent } from './shared/character-card/character-card.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginBarComponent } from './layout/login-bar/login-bar.component';
import { CaroselloComponent } from './views/homepage/carosello/carosello.component';
import { BannerLinkComponent } from './views/homepage/banner-link/banner-link.component';
import { ArticlesCardComponent } from './shared/articles-card/articles-card.component';
import { SwitchBannerComponent } from './views/switch/switch-banner/switch-banner.component';
import { SwitchLinkBannerComponent } from './views/switch/switch-link-banner/switch-link-banner.component';
import { GamesComponent } from './views/games/games.component';
import { FilterBarComponent } from './shared/filter-bar/filter-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StoreComponent,
    SwitchComponent,
    NewsComponent,
    SupportComponent,
    AccountComponent,
    CardComponent,
    ButtonComponent,
    CharacterCardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginBarComponent,
    CaroselloComponent,
    BannerLinkComponent,
    ArticlesCardComponent,
    SwitchBannerComponent,
    SwitchLinkBannerComponent,
    GamesComponent,
    FilterBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
