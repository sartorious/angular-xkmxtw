import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coresults } from '../coresults';

@Component({
  selector: 'app-coresult-details',
  templateUrl: './coresult-details.component.html',
  styleUrls: ['./coresult-details.component.css']
})
export class CoresultDetailsComponent implements OnInit {

  coresult;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.coresult = coresults[+params.get('coresultId')];
    });
  }

}