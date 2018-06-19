import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

//pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailsPage } from '../pages/details/details';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { LogoutPage } from '../pages/logout/logout';
import { AdminPage } from '../pages/admin/admin';
import { ManageDrinkPage } from '../pages/manage-drink/manage-drink';

import { FirebaseProvider } from '../providers/firebase/firebase';
import { HttpClientModule  } from '@angular/common/http'
import { FirebaseauthenticationProvider } from '../providers/firebaseauthentication/firebaseauthentication';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    AuthenticationPage,
    LogoutPage,
    AdminPage,
    ManageDrinkPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    AuthenticationPage,
    LogoutPage,
    AdminPage,
    ManageDrinkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    FirebaseauthenticationProvider
  ]
})
export class AppModule {}
