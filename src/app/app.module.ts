import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
=======

>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';

<<<<<<< HEAD
@NgModule({
  declarations: [
    MyApp,

=======

@NgModule({
  declarations: [
    MyApp
>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
<<<<<<< HEAD
    MyApp,
=======
    MyApp
>>>>>>> 7e39fad6a8f0ad12ec5d441f6ac0312baec3434f
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
