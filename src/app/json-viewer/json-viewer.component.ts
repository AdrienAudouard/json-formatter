import {Component, Input, OnInit} from '@angular/core';
import {JsonObject} from '../models/json-object';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {
  @Input() jsonObject: JsonObject;
  @Input() title: string;

  children: JsonObject[];

  constructor() { }

  ngOnInit(): void {
    this.children = this.jsonObject.value as JsonObject[];
  }

}
