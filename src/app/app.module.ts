import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// Import icons under this line
import { faArrowDown, faAppleAlt, faCoffee, faEdit, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    // Add an icons to the library for convenient access in other components.
    library.addIcons(faArrowDown, faAppleAlt, faCoffee, faEdit, faSquare, faInstagram, faLinkedinIn, faGithub );
  }
}
