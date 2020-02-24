import { Component, OnInit } from '@angular/core';
import {TredingService} from '../service/tradingservice';
import {Treding} from '../modal/entity.treding';

@Component({
  selector: 'app-list-forex',
  templateUrl: './list-forex.component.html',
  styleUrls: ['./list-forex.component.css']
})
export class ListForexComponent implements OnInit {

  tredings = [];
  treding: Treding[];

  constructor( private tredingService: TredingService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.tredingService.getAll().subscribe(data => {
        this.treding = data["data"];
        console.log(this.treding = data["data"]);
      }
    );
  }

}
