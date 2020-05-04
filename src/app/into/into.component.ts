import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.css']
})
export class IntoComponent implements OnInit {

  into= { };

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.into=this.getInto();
  }

  getInto(){
    return this.config.getconfig().into;
  }
}
