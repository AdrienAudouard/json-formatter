import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JsonFormatterService} from '../shared/services/json-formatter.service';
import {JsonObject} from '../models/json-object';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnInit {
  @Output() jsonObjectCreated = new EventEmitter<JsonObject>();

  public jsonForm: FormGroup;
  public errorMessage: string;

  constructor(private formBuilder: FormBuilder, private formatterService: JsonFormatterService) { }

  ngOnInit(): void {
    this.jsonForm = this.formBuilder.group({
      json: ['', Validators.required]
    });
  }

  submitJson(): void {
    if (this.jsonForm.valid) {
      const { json } = this.jsonForm.getRawValue();

      try {
        const object = this.formatterService.formatJson(json);
        this.jsonObjectCreated.emit(object);
      } catch (e) {
        this.errorMessage = e.message;
      }
    }
  }
}
