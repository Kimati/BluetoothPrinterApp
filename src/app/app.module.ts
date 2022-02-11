import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashComponent } from './components/home-dash/home-dash.component';
import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx'; //plugin

@NgModule({
  declarations: [AppComponent,HomeDashComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Printer],
  bootstrap: [AppComponent],
})
export class AppModule {}
