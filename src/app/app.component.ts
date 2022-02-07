import { Component, Input, Output, ViewEncapsulation,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'angularelement';
  // public input:any
  // // @Input() appinput:any;
  // @Input()
  // set appinput(value: any) {
  //   this.input = value;
  //   // console.log(this.grab_linkval);
  // }
  // @Output() appoutput=new EventEmitter();
}
