import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CahierDeTexteComponent } from './cahier-de-texte/cahier-de-texte/cahier-de-texte.component';

@NgModule({
  declarations: [
    AppComponent,
    CahierDeTexteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FontAwesomeModule,
    // FormGroup,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
