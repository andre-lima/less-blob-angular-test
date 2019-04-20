import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../../src/app/box/box.component';

@Component({
  selector: 'app-box[theme]',
  templateUrl: './theme-box.component.html',
  styleUrls: ['./theme-box.component.less']
})
export class ThemeBoxComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('THEME BOOOOOOXXXXX');
  }
}
