import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import {ScrollDispatchModule, ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ScrollDispatchModule,
    ScrollingModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
