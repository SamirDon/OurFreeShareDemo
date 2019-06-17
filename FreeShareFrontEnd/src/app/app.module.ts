import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageLayoutComponent } from './main-page-layout/main-page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
