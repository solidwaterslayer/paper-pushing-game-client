import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(protected httpClient: HttpClient) { }

  getLevel(): Observable<any> {
    return this.httpClient.get<any>('https://paper-pushing-game-server.herokuapp.com/');
  }
}
