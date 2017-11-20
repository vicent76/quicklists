import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { Storage } from '@ionic/storage';
>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

<<<<<<< HEAD
  constructor() {
    console.log('Hello DataProvider Provider');
=======
  constructor(public storage: Storage){
   
  }

  getData(): Promise<any> {
    return this.storage.get('checklists');
  }

  save(data): void {
    let saveData = [];
    //Remove observables
    data.forEach((checklist) => {
    saveData.push({
    title: checklist.title,
    items: checklist.items
    });
    });
    let newData = JSON.stringify(saveData);
    this.storage.set('checklists', newData);
>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f
  }

}
