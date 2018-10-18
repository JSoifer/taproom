import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { NewBeerComponent } from './new-beer/new-beer.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    EditBeerComponent,
    NewBeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
