import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionManagerService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  transaction: any = "hello world";
  constructor(protected transactionManagerService: TransactionManagerService) { }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction(): void {
    this.transactionManagerService.getTransaction().subscribe(
      (transaction: any) => {
        console.log(transaction);
        this.transaction = transaction;
      },
      (httpErrorResponse: HttpErrorResponse) => {
        console.log(httpErrorResponse.message);
      }
    )
  }
}
