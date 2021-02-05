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

  isArray: boolean;

  ngOnInit(): void {
    this.isArray = this.jsonObject.type === 'array';
  }
}
