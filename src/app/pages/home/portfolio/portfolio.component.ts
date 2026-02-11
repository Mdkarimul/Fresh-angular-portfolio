import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { TitleStrategy } from '@angular/router';

@Component({

  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true,
  imports: [NgFor]

})
export class PortfolioComponent {

  public all: boolean = true;
  public web: boolean = false;
  public mobile: boolean = false;
  public others: boolean = false;


  project_tab(Ele: string) {

    switch (Ele) {
      case 'all':
        this.all = true;
        this.mobile = false;
        this.web = false;
        this.others = false;
        break;

      case 'web':
        this.web = true;
        this.all = false;
        this.mobile = false;
        this.others = false;
        break;

      case 'mobile':
        this.mobile = true;
        this.all = false;
        this.others = false;
        this.web = false;
        break;

      case 'others':
        this.others = true;
        this.all = false;
        this.web = false;
        this.mobile = false;
        break;

      default:
        this.all = true
        break;
    }
  }


  public projects: any[] = [


    {
      category: "web",
      img: "../../../assets/Angular_project_one.PNG",
      title: "Angular express crud application",
      description: "A full stack application built with Angular for frontend and Node.js with Express.js for backend. It performs CRUD operations and is containerized using Docker for easy deployment.",
      technologies: ["html", "css", "js", "type script", "node js", "express js", "docker", "postgress", "sql"],
      gitUrl: "https://github.com/Mdkarimul/crud-express-backend.git",
      liveUrl: "https://github.com/Mdkarimul/crud-express-backend.git",
      feature: true
    },








  ]








}
