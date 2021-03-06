import { Beer } from '../models/beer.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  @Output() sellPintSender = new EventEmitter();
  constructor() { }


  editButtonClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
    }

  sellPintClicked(beerToEdit: Beer) {
    this.sellPintSender.emit(beerToEdit);
    }

  ngOnInit() {
  }


}
