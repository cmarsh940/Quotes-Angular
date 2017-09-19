import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.css']
})
export class QuoteDashboardComponent implements OnInit {

  quotes: Quote[] = [];

  createQuote(newQuote) {
    console.log('triggerd from child event');
    this.quotes.push(newQuote);
    console.log(this.quotes);
  }

  constructor() { }

  ngOnInit() {
  }

}
