import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from '../models/beer.model';


@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() finishedSender = new EventEmitter();
  
  finishedButtonClicked(beerToEdit: Beer) {
    this.finishedSender.emit(beerToEdit);
    }
  constructor() { }

  ngOnInit() {
  }

}
