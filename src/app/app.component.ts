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
  public answer!: number[];

  public constructor(private levelService: LevelService) { this.getLevel() }

  private getLevel() {
    this.levelService.getLevel().subscribe(
      (level: any) => {
        this.level = level
        this.answer = []
        if (level.receipt.length > 10) { this.getLevel() } // TODO remove me
      },
      (httpErrorResponse: HttpErrorResponse) => { console.log(httpErrorResponse.message) }
    )
  }

  public addAnswer(answer: number) {
    if (!this.answer.includes(answer)) {
      this.answer.push(answer)
    }

    this.answer = this.answer.slice(this.answer.length - 2, this.answer.length)
  }

  public submit() {}
}
