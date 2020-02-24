import { Component, OnInit } from '@angular/core';
import {TredingService} from '../service/tradingservice';
import {Treding} from '../modal/entity.treding';

@Component({
  selector: 'app-add-trader',
  templateUrl: './add-trader.component.html',
  styleUrls: ['./add-trader.component.css']
})
export class AddTraderComponent implements OnInit {

  treding: Treding = new Treding();
  constructor( private tredingService: TredingService) { }

  public titleStyles =  {
    width: '50%',
    margin: 'auto',
    paddingTop: '40px'
  };

  ngOnInit() {
  }

  addTrader() {
    this.tredingService.postLoan(this.treding).subscribe(data => {
      if (data["code"] == 200) {
        alert(data["message"]);
        this.treding = data["data"];
      } else {
        alert(data["message"]);
      }
    });
  }
  }
