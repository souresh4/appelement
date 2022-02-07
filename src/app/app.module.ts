import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, NgModule,Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { DemoelementComponent } from './demoelement/demoelement.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[DemoelementComponent],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }  
  ngDoBootstrap() {    
    const el = createCustomElement(DemoelementComponent, { 
    injector: this.injector 
    });    
    customElements.define('my-element-app', el);  
    }}

