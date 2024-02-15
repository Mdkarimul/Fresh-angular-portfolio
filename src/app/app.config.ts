import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { firebaseConfig } from '../config/firebaseconfig';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {


  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(), 
    provideClientHydration(),
     importProvidersFrom(provideFirebaseApp(() => initializeApp(
      {
      "projectId":"portfolio-411905",
      "appId":"1:143977120072:web:62de3bc05b49569c62f37d",
      "storageBucket":"portfolio-411905.appspot.com","apiKey":"AIzaSyDZrmHFDsptJamnX55IGCbREyeOh-CCyME",
      "authDomain":"portfolio-411905.firebaseapp.com",
       "messagingSenderId":"143977120072"}))), importProvidersFrom(provideAuth(() => getAuth())), 

  // importProvidersFrom(provideAppCheck(() => {
// TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
// const provider = new ReCaptchaEnterpriseProvider("reCAPTCHA Enterprise site key");
//   return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
// })),

 importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(provideStorage(() => getStorage())),
 

   
    ]
};
