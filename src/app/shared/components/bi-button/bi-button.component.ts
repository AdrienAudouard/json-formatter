import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bi-button',
  templateUrl: './bi-button.component.html',
  styleUrls: ['./bi-button.component.scss']
})
export class BiButtonComponent implements OnInit {
  @Output() click = new EventEmitter();
  @Input() icon: string;
  @Input() hoverIcon: string;
  @Input() color: string;
  @Input() hoverColor: string;

  public mouseOvered = false;
  public ngClass: any;

  constructor() { }

  ngOnInit(): void {
    this
  }

}
