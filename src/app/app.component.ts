import { Component } from '@angular/core';
import {JsonObject} from './models/json-object';
import {NavigationEnd, Router} from '@angular/router';

declare let gtag: any;
declare let env: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jsonObjects: JsonObject[] = [];

  constructor() {
    gtag('config', env.ga,
      { page_path: '/' }
    );
  }


  public onNewJsonObject($event: JsonObject): void {
    this.jsonObjects.push($event);
  }
}
