import { Component } from '@angular/core';
import { transactions } from '../transactions';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent   {
  transactions = transactions;

  constructor() { }

  ngOnInit() {
  }

}