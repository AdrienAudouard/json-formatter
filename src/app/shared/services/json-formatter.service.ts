import { Injectable } from '@angular/core';
import {JsonObject} from '../../models/json-object';

@Injectable({
  providedIn: 'root'
})
export class JsonFormatterService {

  constructor() { }

  public formatJson(jsonStr: string): JsonObject {
    const jsonParsed = JSON.parse(jsonStr);

    return this.createJsonObject(jsonParsed);
  }

  public createJsonObject(object: any): JsonObject {
    const jsonObject: JsonObject = { value: [] };

    jsonObject.value = new Array();

    const keys = Object.keys(object);

    for (const key of keys) {
      jsonObject.value.push({ name: key, value: this.createJsonObjectRecursive(object[key]) });
    }

    return jsonObject;
  }

  private createJsonObjectRecursive(object: any): string | JsonObject[] {
    if (typeof object === 'string' || typeof object === 'number') { return '' + object; }

    const keys = Object.keys(object);
    const objects: JsonObject[] = [];

    for (const key of keys) {
      objects.push({ name: key, value: this.createJsonObjectRecursive(object[key]) });
    }

    return objects;
  }
}
