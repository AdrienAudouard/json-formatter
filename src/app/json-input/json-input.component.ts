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
    const lastJson = this.formatterService.getLastValue();
    this.jsonForm = this.formBuilder.group({
      json: [lastJson, Validators.required]
    });
  }

  submitJson(): void {
    if (this.jsonForm.valid) {
      const { json } = this.jsonForm.getRawValue();

      this.formatterService.formatJson(json).subscribe((object) => {
        this.jsonObjectCreated.emit(object);
      }, (error => {
        this.errorMessage = error.message;
      }));
    }
  }
}
