import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { DemoelementComponent } from './demoelement/demoelement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoelementComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [DemoelementComponent],
  // bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const el = createCustomElement(DemoelementComponent, {
      injector: this.injector
    });
    if (!customElements.get('my-element-app')) {
      customElements.define('my-element-app', el);
    }
  }
}

