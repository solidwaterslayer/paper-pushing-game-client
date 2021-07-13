import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LevelService } from './services/level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  level: any = "hello world";
  constructor(protected levelService: LevelService) { }

  ngOnInit() {
    this.getLevel();
  }

  getLevel(): void {
    this.levelService.getLevel().subscribe(
      (level: any) => {
        console.log(level);
        this.level = level;
      },
      (httpErrorResponse: HttpErrorResponse) => {
        console.log(httpErrorResponse.message);
      }
    )
  }
}
