import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-collapser',
  templateUrl: './collapser.component.html',
  styleUrls: ['./collapser.component.scss']
})
export class CollapserComponent implements OnInit {

  @Output() collapseChange = new EventEmitter<boolean>();

  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onButtonClick(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapseChange.emit(this.isCollapsed);
  }
}
