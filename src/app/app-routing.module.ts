import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './views/games/games.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { StoreComponent } from './views/store/store.component';
import { SwitchComponent } from './views/switch/switch.component';
import { NewsComponent } from './views/news/news.component';
import { SupportComponent } from './views/support/support.component';
import { AccountComponent } from './views/account/account.component';
const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'homepage',component:HomepageComponent},
  {path: 'switch',component:SwitchComponent},
  {path: 'support',component:SupportComponent},
  {path: 'account',component:AccountComponent},
  {path: 'store',component:StoreComponent},
  {path: 'news',component:NewsComponent},
  {path: 'games',component:GamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
