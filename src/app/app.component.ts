import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { LevelService } from './level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public level: any
  public answer: number[]

  public constructor(private levelService: LevelService) {
    this.levelService.getLevel().subscribe(
      (level: any) => { this.level = level },
      (httpErrorResponse: HttpErrorResponse) => { console.log(httpErrorResponse.message) }
    )
    this.answer = []
  }

  public addAnswer(answer: number) {
    if (!this.answer.includes(answer)) {
      this.answer.push(answer)
    }

    this.answer = this.answer.slice(this.answer.length - 2, this.answer.length)
  }
}
