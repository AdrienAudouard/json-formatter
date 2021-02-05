import { Injectable } from '@angular/core';
import {JsonObject} from '../../models/json-object';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonFormatterService {

  constructor(private http: HttpClient) { }

  public formatJson(jsonStr: string): Observable<JsonObject> {
    const obs$ = this.isValidURL(jsonStr) ? this.fetchJson(jsonStr) : of(jsonStr);

    return obs$.pipe(
      map((res) => typeof res === 'object' ? res : JSON.parse(res)),
      map((json) => this.createJsonObject(json))
    );
  }

  public createJsonObject(object: any): JsonObject {
    const jsonObject: JsonObject = { value: [] };

    jsonObject.value = [];

    const keys = Object.keys(object);

    for (const key of keys) {
      jsonObject.value.push({ name: key, value: this.createJsonObjectRecursive(object[key]) });
    }

    return jsonObject;
  }

  private createJsonObjectRecursive(object: any): string | JsonObject[] {
    if (typeof object !== 'object') { return '' + object; }

    const keys = Object.keys(object);
    const objects: JsonObject[] = [];

    for (const key of keys) {
      objects.push({ name: key, value: this.createJsonObjectRecursive(object[key]) });
    }

    return objects;
  }

  private fetchJson(url: string): Observable<any> {
    return this.http.get(url);
  }

  private isValidURL(str: string): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  }
}
