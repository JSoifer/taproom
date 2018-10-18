import { Component } from '@angular/core';
import { Beer } from './models/beer.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentTime = new Date();
  selectedBeer = null;
  selectedPint = null;

  editBeer(beerToEdit) {
    this.selectedBeer = beerToEdit;
  }
  finishedEditing(beerToEdit) {
    this.selectedBeer = null;
  }

  sellPint(beerToEdit) {
    this.selectedPint = beerToEdit;
    this.selectedPint.status--;
    if(this.selectedPint.status <= 0){
      this.selectedPint.status = 0;
    }
  }

  addBeer(newBeer: Beer) {
    this.masterBeerList.push(newBeer);
  }

  masterBeerList: Beer[] = [
    new Beer("Oktoberfest Marzen", "Hacker-Pschorr", 5.25, 5.5, 124),
    new Beer("Dunkel", "Hofbrau", 5.25, 5.5, 15),
    new Beer("Weissbier", "Paulaner", 5.25, 5.5, 124)
  ];

}
