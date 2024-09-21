import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
//import { TestComponentComponent } from './test-component/test-component.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
