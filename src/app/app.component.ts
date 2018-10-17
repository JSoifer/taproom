import { Component } from '@angular/core';
import { Beer } from './models/beer.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  beers: Beer[] = [
    new Beer("Oktoberfest Marzen", "Hacker-Pschorr", 5.25, 5.5, 124),
    new Beer("Dunkel", "Hofbrau", 5.25, 5.5, 15),
    new Beer("Weissbier", "Paulaner", 5.25, 5.5, 124)
  ];
  selectedBeer = null;
  selectedPint = null;

  editBeer(clickedBeer) {
    this.selectedBeer = clickedBeer;
    }
  sellPint(currentBeer) {
    this.selectedPint = currentBeer;
    this.selectedPint.status--;
    if(this.selectedPint.status <= 0){
      this.selectedPint.status = 0;
    }
  }

  finishedEditing() {
    this.selectedBeer = null;
  }

  priorityColor(currentBeer){
    if (currentBeer.status <= 5){
      return "bg-danger beerInfo" ;
    } else if (currentBeer.status <= 20) {
      return  "bg-warning beerInfo";
    } else {
      return "bg-info beerInfo";
    }
  }

}
