import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2page } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  public human1(){
    console.log ("testbutton")
  }
  public human2(){
    console.log (" human2")
    this.navCtrl.push(Page2page);
  }
}
