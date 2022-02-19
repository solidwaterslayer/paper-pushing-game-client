import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionManagerService {
  constructor(protected httpClient: HttpClient) { }

  getTransaction(): Observable<any> {
    return this.httpClient.get<any>('https://transaction-manager-server.herokuapp.com/');
  }
}
