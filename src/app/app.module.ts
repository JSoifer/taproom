import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    EditBeerComponent
  ],
  imports: [
    BrowserModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
