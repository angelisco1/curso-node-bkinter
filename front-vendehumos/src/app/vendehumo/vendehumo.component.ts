import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendehumo',
  templateUrl: './vendehumo.component.html',
  styleUrls: ['./vendehumo.component.css']
})
export class VendehumoComponent implements OnInit {
  @Input() vh: any = null

  constructor() { }

  ngOnInit(): void {
  }

}
