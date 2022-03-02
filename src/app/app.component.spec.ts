import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule]
    }).compileComponents()
  })

  it('should create the app', () => { expect(TestBed.createComponent(AppComponent).componentInstance).toBeTruthy() })
})
