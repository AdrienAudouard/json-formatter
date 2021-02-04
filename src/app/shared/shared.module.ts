import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiButtonComponent } from './components/bi-button/bi-button.component';



@NgModule({
    declarations: [BiButtonComponent],
    exports: [
        BiButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
