import { Component, Input, Output, ViewEncapsulation,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoelement',
  templateUrl: './demoelement.component.html',
  styleUrls: ['./demoelement.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class DemoelementComponent implements OnInit {
  public input:any
  // @Input() appinput:any;
  @Input()
  set appinput(value: any) {
    this.input = value;
    console.log(this.input);
  }
  @Output() appoutput=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
