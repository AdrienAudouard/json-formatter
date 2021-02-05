import {Component, Input, OnInit, EventEmitter, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {JsonObject} from '../../models/json-object';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {
  @Input() jsonObject: JsonObject;
  @Input() jsonObjectChange = new EventEmitter<JsonObject>();
  @ViewChild('p') popOver: NgbPopover;

  public isEditing = false;
  public formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.formControl = new FormControl(this.jsonObject.text, Validators.required);
  }

  updateText(): void {
    if (!this.formControl.valid) {
      return this.popOver.open();
    }

    this.jsonObject.text = this.formControl.value;
    // @ts-ignore
    this.jsonObject.type = typeof this.jsonObject.text;
    this.jsonObjectChange.emit(this.jsonObject);
    this.isEditing = false;
  }

  resetForm(): void {
    this.formControl.setValue(this.jsonObject.text);
    this.isEditing = false;
  }
}
