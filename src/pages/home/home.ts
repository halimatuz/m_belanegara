import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild(Slides) slides:Slides;

  constructor(public navCtrl: NavController) {

  }
ionViewDidLoad(){
setTimeout(() =>
	this.slides.slideTo(1,1000)
	,1000);
}

}
