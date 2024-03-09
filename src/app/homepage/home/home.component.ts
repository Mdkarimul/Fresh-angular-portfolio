import { Component } from '@angular/core';


import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { ClientFeedComponent } from '../client-feed/client-feed.component';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports :[ServicesComponent,AboutComponent,PortfolioComponent,ContactComponent,ClientFeedComponent,RouterOutlet,RouterLink]
})

  export class HomeComponent {

}
