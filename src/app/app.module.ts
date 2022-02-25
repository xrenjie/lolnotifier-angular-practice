import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebhookInfoDisplayComponent } from './webhook-info-display/webhook-info-display.component';
import { SummonerTableComponent } from './summoner-table/summoner-table.component';
import { SummonerRowComponent } from './summoner-row/summoner-row.component';
import { SummonerInputComponent } from './summoner-input/summoner-input.component';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    WebhookInfoDisplayComponent,
    SummonerTableComponent,
    SummonerRowComponent,
    SummonerInputComponent,
    SubscribePageComponent,
    SearchBarComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
