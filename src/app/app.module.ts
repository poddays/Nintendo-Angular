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
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginBarComponent } from './core/login-bar/login-bar.component';
import { BannerLinkComponent } from './views/homepage/components/banner-link/banner-link.component';
import { ArticlesCardComponent } from './shared/articles-card/articles-card.component';
import { SwitchBannerComponent } from './views/switch/components/switch-banner/switch-banner.component';
import { SwitchLinkBannerComponent } from './views/switch/components/switch-link-banner/switch-link-banner.component';
import { GamesComponent } from './views/games/games.component';
import { FilterBarComponent } from './shared/filter-bar/filter-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropMenuComponent } from './core/navbar/components/drop-menu/drop-menu.component';
import { CustomPropDirective } from './custom-prop.directive';
import { ClickOutsideDirective } from './clickOutside.directive';
import { CaroselloComponent } from './shared/carosello/carosello.component';
import { StoreCardComponent } from './views/store/components/store-card/store-card.component';
import { BigCardStoreComponent } from './views/store/components/big-card-store/big-card-store.component';
import { HomepageNewsComponent } from './views/homepage/components/homepage-news/homepage-news.component';
import { HeroComponent } from './views/homepage/components/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './views/switch/components/nav/nav.component';
import { SalespartComponent } from './views/switch/components/salespart/salespart.component';



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
    BannerLinkComponent,
    ArticlesCardComponent,
    SwitchBannerComponent,
    SwitchLinkBannerComponent,
    GamesComponent,
    FilterBarComponent,
    DropMenuComponent,
    CustomPropDirective,
    ClickOutsideDirective,
    CaroselloComponent,
    StoreCardComponent,
    BigCardStoreComponent,
    FilterBarComponent,
    HomepageNewsComponent,
    HeroComponent,
    NavComponent,
    SalespartComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
