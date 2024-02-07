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

export const appConfig: ApplicationConfig = {


  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(), 
    provideClientHydration(),
     importProvidersFrom(provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyATJFiJG9y_l8koaAmvURIkJxo1KT3Vqjw",
      authDomain: "wapcrm-618ce.firebaseapp.com",
      projectId: "wapcrm-618ce",
      storageBucket: "wapcrm-618ce.appspot.com",
      messagingSenderId: "354883501529",
      appId: "1:354883501529:web:9679008144a225d5412dc8",
      measurementId: "G-1LWVLKWG7F"
    }))),
      importProvidersFrom(provideAuth(() => getAuth())),
       importProvidersFrom(provideFirestore(() => getFirestore())), 
       importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"portfolio-411905","appId":"1:143977120072:web:62de3bc05b49569c62f37d","storageBucket":"portfolio-411905.appspot.com","apiKey":"AIzaSyDZrmHFDsptJamnX55IGCbREyeOh-CCyME","authDomain":"portfolio-411905.firebaseapp.com","messagingSenderId":"143977120072"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
