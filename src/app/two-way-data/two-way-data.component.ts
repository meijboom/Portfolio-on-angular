import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-two-way-data',
  templateUrl: './two-way-data.component.html',
  styleUrls: ['./two-way-data.component.scss']
})
export class TwoWayDataComponent implements OnInit {
  message: string = "initial value";
  constructor() { }

  ngOnInit() {
  }
}
