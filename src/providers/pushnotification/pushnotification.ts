
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal, public platform:Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }

  initNotification()
  {
    if (this.platform.is('cordova'))
    {
      this.oneSignal.startInit('8d460223-a39e-4d94-bef6-45d2929f6d03', '409563632698');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        console.log('Notificacion recibida');
        // do something when notification is received
        });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('Notificacion abierta');
        });

      this.oneSignal.endInit();
    } else
        {
          console.log('OneSignal no funciona en Chrome');
        }    
    
  }
}
