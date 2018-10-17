import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from '../models/beer.model';


@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent  {
@Output() sendBeer = new EventEmitter();

submitForm(beerName: string, beerBrand: string, beerPrice: number, beerAbv: number, beerStatus: number ) {
  let newBeer: Beer = new Beer(beerName, beerBrand, beerPrice, beerAbv, beerStatus);
  this.sendBeer.emit(newBeer);
}
  constructor() { }

  ngOnInit() {
  }

}
