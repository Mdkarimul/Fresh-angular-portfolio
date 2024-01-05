import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { ClientFeedComponent } from '../client-feed/client-feed.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports :[NavbarComponent,HeroSectionComponent,ServicesComponent,AboutComponent,PortfolioComponent,ContactComponent,ClientFeedComponent,FooterComponent]
})

  export class HomeComponent {

}
