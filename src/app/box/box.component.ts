import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box:not([theme])',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.less']
})
export class BoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
