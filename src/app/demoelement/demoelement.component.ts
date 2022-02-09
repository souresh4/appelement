import { Component, Input, Output, ViewEncapsulation, EventEmitter, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode, NgZone } from '@angular/core';

import { AppModule } from '../app.module';


@Component({
  selector: 'app-demoelement',
  templateUrl: './demoelement.component.html',
  styleUrls: ['./demoelement.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DemoelementComponent implements OnInit {
  public input: any
  // @Input() appinput:any;
  @Input()
  set appinput(value: any) {
    this.input = value;
    console.log(this.input);
  }
  @Output() appoutput = new EventEmitter();
  constructor() {
    // platformBrowserDynamic().bootstrapModule(AppModule, {
    //   ngZone: 'noop'
    // }).catch(err => console.error(err));
  }

  ngOnInit() {
  }

}
