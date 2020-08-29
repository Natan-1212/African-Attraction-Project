import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { SafetyComponent } from './safety/safety.component';
import { ContactComponent } from './contact/contact.component';
import { UpdatesComponent } from './updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttractionsComponent,
    SafetyComponent,
    ContactComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
