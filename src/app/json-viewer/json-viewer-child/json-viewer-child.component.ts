import {Component, Input} from '@angular/core';
import {JsonObject} from '../../models/json-object';

@Component({
  selector: 'app-json-viewer-child',
  templateUrl: './json-viewer-child.component.html',
  styleUrls: ['./json-viewer-child.component.scss']
})
export class JsonViewerChildComponent {
  @Input() child: JsonObject;
  @Input() isLast: boolean;
  @Input() isInArray: boolean;

  hideChildren: boolean;

  constructor() { }

  public onCollapse(event: boolean): void {
    this.hideChildren = event;
  }
}
