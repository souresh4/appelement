import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript();
  }
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.type = 'text/javascript';
    script.src = 'https://transcendent-prgan-files.s3.amazonaws.com/angularelement.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}
}
