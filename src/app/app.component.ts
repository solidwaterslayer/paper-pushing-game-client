import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core'
import { LevelService } from './level.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public level: any
  public answers!: number[]

  public display!: string
  public accuracy!: number
  public solutions!: any[][]

  public constructor(private levelService: LevelService) { this.getLevel() }

  private getLevel() {
    this.levelService.getLevel().subscribe(
      (level: any) => {
        this.level = level
        this.answers = []
        if (level.receipt.length > 10) { this.getLevel() } // TODO remove me
      },
      (httpErrorResponse: HttpErrorResponse) => { console.log(httpErrorResponse.message) }
    )
  }

  public addAnswer(answer: number) {
    if (!this.answers.includes(answer)) {
      this.answers.push(answer)
    }

    this.answers = this.answers.slice(this.answers.length - 2, this.answers.length)
  }

  public submit() {
    this.display = 'block'
    this.accuracy = 0
    this.solutions = []
    for (let i = 0; i < this.level.transformation.length; i++) {
      if (isNaN(parseInt(this.level.transformation[i]))) {
        if (this.answers.includes(i)) {
          this.accuracy += 50
        }
        this.solutions.push([i, this.level.transformation[i]])
      }
    }
  }

  public ok() {
    this.display = 'none'
    this.getLevel()
  }
}
