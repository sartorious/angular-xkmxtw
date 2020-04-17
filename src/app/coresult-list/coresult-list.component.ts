import { Component } from '@angular/core';

import { coresults } from '../coresults'

@Component({
  selector: 'app-coresult-list',
  templateUrl: './coresult-list.component.html',
  styleUrls: ['./coresult-list.component.css']
})
export class CoresultListComponent {
  coresults = coresults;
}