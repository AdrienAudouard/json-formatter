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
    this.setLastValue(jsonStr);
    const obs$ = this.isValidURL(jsonStr) ? this.fetchJson(jsonStr) : of(jsonStr);

    return obs$.pipe(
      map((res) => typeof res === 'object' ? res : JSON.parse(res)),
      map((json) => this.createJsonObject(json))
    );
  }

  public createJsonObject(object: any): JsonObject {
    const type = Array.isArray(object) ? 'array' : 'object';
    const jsonObject: JsonObject = { children: [], type, isPrimitiveValue: false };

    jsonObject.children = [];

    const keys = Object.keys(object);

    for (const key of keys) {
      const toCreate = object[key];
      if (typeof toCreate !== 'object') {
        // @ts-ignore
        jsonObject.children.push({ name: key, text: toCreate, type: typeof toCreate, isPrimitiveValue: true});
        continue;
      }

      jsonObject.children.push({
        name: key,
        children: this.createJsonObjectRecursive(object[key]),
        type: 'object',
        isPrimitiveValue: false
      });
    }

    return jsonObject;
  }

  private createJsonObjectRecursive(object: any): JsonObject[] {
    const keys = Object.keys(object);
    const objects: JsonObject[] = [];

    for (const key of keys) {
      const toCreate = object[key];
      if (typeof toCreate !== 'object') {
        // @ts-ignore
        objects.push({ name: key, text: toCreate, type: typeof toCreate, isPrimitiveValue: true});
        continue;
      }

      objects.push({
        name: key,
        children: this.createJsonObjectRecursive(object[key]),
        type: 'object',
        isPrimitiveValue: false
      });
    }

    return objects;
  }

  private fetchJson(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getLastValue(): string {
    return localStorage.getItem('last') || '';
  }

  private setLastValue(value: string): void {
    localStorage.setItem('last', value);
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
