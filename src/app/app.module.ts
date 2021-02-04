import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonInputComponent } from './json-input/json-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { JsonViewerChildComponent } from './json-viewer/json-viewer-child/json-viewer-child.component';
import { CollapserComponent } from './json-viewer/collapser/collapser.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    JsonInputComponent,
    JsonViewerComponent,
    JsonViewerChildComponent,
    CollapserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
