import {
  Component,
  ViewChild
} from '@angular/core';

import {
  NavController,
  AlertController,
  Slides,
  Events
} from 'ionic-angular';

import {
  AboutPage
} from '../about/about';

import {
  WorkPage
} from '../work/work';
/*
import {
  PolysparesPage
} from '../polyspares/polyspares';


import {
  GetintouchPage
} from '../getintouch/getintouch';

import {
  BravecamPage
} from '../bravecam/bravecam';

//import { NgxAni } from 'ngxani';
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  queries: {
    content: new ViewChild('content')
  }
})
export class HomePage {
  //  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;

  aboutPage = AboutPage;
  workPage = WorkPage;
  //getintouchPage = GetintouchPage;

  deutsch: boolean = false;
  about: boolean;
  work: boolean;
  contact: boolean;
  slidesData: any;
  slideNo: number;
  slideTotal: number;
  nextSlideNo: number;
  secondaryBright: boolean;


  // myAlert: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public events: Events) {
this.slideNo = 0;
    this.about = true;
    this.secondaryBright = false;
    this.nextSlideNo = 1;
    this.slidesData = [{
        img: "assets/img/brittik_basu.jpg",
        headline: "Brittik Basu",
        headlineDE:  "Brittik Basu",
        paragraph: "UX Designer & Hybrid App Developer",
        paragraphDE: "UX Designer & Hybrid App Developer"


      },
      {
        img: "assets/img/brittik_basu.jpg",
        headline: "My Skills",
        headlineDE: "Meine Fähigkeiten",
        paragraph: "Things I'm good at",
        paragraphDE: "Dinge, an denen ich  bin"
      },
      {
        img: "assets/img/brittik_basu.jpg",
        headline: "My Work",
        headlineDE: "Meine Arbeit",
        paragraph: "Exciting projects I've worked on",
        paragraphDE: "Spannende Projekte, die ich gearbeitet habe",

      },
      {
        img: "assets/img/brittik_basu.jpg",
        headline: "Get in Touch",
        headlineDE: "in Kontakt kommen",
        paragraph: "hello(at)brittikbasu.com",
        paragraphDE: "Dinge, an denen ich  bin",

      },
      {
        img: "",
        headline: "",
        paragraph: ""
      }
    ];

        this.events.publish('language:changed', this.deutsch);

  }

  ionViewDidLoad() {

    /*
    let alert = this.alertCtrl.create({
          title: 'Hi There Awesome Person!',
          subTitle: 'My website is a work in progress and will be ready by the end of this month (March, 2017). Dont let this stop you from checking it out now :)',
          buttons: ['OK COOL!']
        });
        alert.present();
    */

  }

  languageChanged() {
    this.deutsch = !this.deutsch;
    console.log("language changed");
    this.events.publish('language:changed', this.deutsch);
  }
  


  goToSlide() {
    this.slides.slideTo(2, 500);
  }



  errorFree() {
    if (this.slides.getActiveIndex() > this.slides.length() - 1) {
      console.log("Slide Overflow Detected");
      if (this.nextSlideNo > 4) {
        this.nextSlideNo--;
      }
    } else {

      this.slideNo = this.slides.getActiveIndex();
      if (this.nextSlideNo > this.slides.length() - 1) {
        this.nextSlideNo--;
      } else {
        this.nextSlideNo = this.slides.getActiveIndex() + 1;

      }
    }

  }



  slideChanged() {

    console.log("Current index is", this.slideNo);
    this.errorFree();
    console.log("nextSlideNo is", this.nextSlideNo);

    if (this.slideNo == 0) {
      this.secondaryBright = false;
      this.about = true;
      this.contact = false;
      this.work = false;
      console.log("on about slide");
      //this.slides.slideTo(0, 500);

    } else if (this.slideNo == 1) {
      this.work = true;
      this.about = false;
      this.contact = false;
      console.log("on skills slide");
      // this.slides.slideTo(1, 500);
      window.setTimeout(() => this.secondaryBright = true, 750);


    } else if (this.slideNo == 2) {
      this.contact = false;
      this.work = false;
      this.about = false;
      console.log("on work slide");
      // this.slides.slideTo(2, 500);
      window.setTimeout(() => this.secondaryBright = true, 350);

    } else if (this.slideNo == 3) {
      this.contact = true;
      this.work = false;
      this.about = false;
      console.log("on contact slide");
      //this.slides.slideTo(3, 500);
      window.setTimeout(() => this.secondaryBright = true, 350);

    }




  }

  slide(where) {
    if (where == "next") {
      this.slides.slideNext();
    } else if (where == "prev") {
      this.slides.slidePrev()
    }
  }



}
