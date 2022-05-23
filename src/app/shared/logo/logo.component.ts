import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() public text: string | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('logo was init');
  }
}
