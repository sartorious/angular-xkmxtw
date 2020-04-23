import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { transactions } from '../transactions';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transaction;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.transaction = transactions[+params.get('transactionId')]
    })
  }

}