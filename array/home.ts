import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arrynum: number[]
  items: any=[]

  x: number = 5

  constructor(public navCtrl: NavController) {

    for (let i=0; i<6; i++){
      this.items.push("x : ",this.x)
      console.log("i: ", i)
      this.x = this.x+1
      console.log ("array is: ",this.items[i])
    }

    var y: number;
    y = 3;
    console.log("y is: ",y);


  }

}
