import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { LevelService } from './level.service'


describe('LevelService', () => {
  let levelService: LevelService

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HttpClientModule] }).compileComponents()
    levelService = TestBed.inject(LevelService)
  })

  it('should be created', () => { expect(levelService).toBeTruthy() })
})
