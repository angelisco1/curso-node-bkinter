import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import SocketIoClient from 'socket.io-client'

if (environment.production) {
  enableProdMode();
}

export const socket = SocketIoClient('http://localhost:3001')

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
