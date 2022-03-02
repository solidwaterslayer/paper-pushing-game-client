import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  public constructor(protected httpClient: HttpClient) {}

  public getLevel(): Observable<any> { return this.httpClient.get<any>('https://paper-pushing-game-server.herokuapp.com/') }
}
