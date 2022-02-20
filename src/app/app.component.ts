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

  public constructor(private levelService: LevelService) {
    this.levelService.getLevel().subscribe(
      (level: any) => { this.level = level },
      (httpErrorResponse: HttpErrorResponse) => { console.log(httpErrorResponse.message) }
    )
  }
}
