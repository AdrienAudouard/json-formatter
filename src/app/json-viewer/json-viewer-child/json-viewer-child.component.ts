import {Component, Input, OnInit} from '@angular/core';
import {JsonObject} from '../../models/json-object';

@Component({
  selector: 'app-json-viewer-child',
  templateUrl: './json-viewer-child.component.html',
  styleUrls: ['./json-viewer-child.component.scss']
})
export class JsonViewerChildComponent implements OnInit {
  @Input() child: JsonObject;
  @Input() isLast: boolean;

  isChildString: boolean;
  value: string;
  children: JsonObject[];
  hideChildren: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isChildString = typeof this.child.value === 'string';

    const suffix = this.isLast ? '' : ',';
    this.value = this.isChildString ? `"${this.child.value}"${suffix}` : '{';

    if (!this.isChildString) {
      this.children = this.child.value as JsonObject[];
    }
  }

  public onCollapse(event: boolean): void {
    this.hideChildren = event;
  }
}
