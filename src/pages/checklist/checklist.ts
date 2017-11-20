import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f

/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {
<<<<<<< HEAD

  constructor(public navCtrl: NavController, public navParams: NavParams) {
=======
  checklist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

    this.checklist = this.navParams.get('checklist');
>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }

<<<<<<< HEAD
=======
  addItem(): void{

    let prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: 'Enter the name of the task for this checklist below',
      inputs: [
        {
          name: 'name',
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'save',
          handler: data => {
            this.checklist.addItem(data.name);
          }
        }
      ]
    });
    prompt.present();
  }

  toggleItem(item): void{
    this.checklist.toggleItem(item);
  }

  removeItem(item): void{
    this.checklist.removeItem();
  }

  renameItem(item): void{

    let prompt = this.alertCtrl.create({
      title: 'Rename item',
      message: 'Enter the new name of the task for this checklist below',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.checklist.renameItem(item, data.name);
          }
        }
      ]
    });
    prompt.present();
  }

  uncheckItems(): void {

    this.checklist.items.forEach((item)=>{
      if (item.checked){
        this.checklist.toggleItem(item);
      }
    });
  }

>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f
}
