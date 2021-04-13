import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ByeComponent } from './bye.component';
import { AdDirective } from './ad.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AdDirective, HelloComponent, ByeComponent ],
  entryComponents: [ HelloComponent, ByeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
