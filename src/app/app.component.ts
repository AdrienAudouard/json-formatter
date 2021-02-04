import { Component } from '@angular/core';
import {JsonObject} from './models/json-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jsonObjects: JsonObject[] = [];

  public onNewJsonObject($event: JsonObject): void {
    this.jsonObjects.push($event);
  }
}
