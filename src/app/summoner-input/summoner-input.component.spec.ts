import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerInputComponent } from './summoner-input.component';

describe('SummonerInputComponent', () => {
  let component: SummonerInputComponent;
  let fixture: ComponentFixture<SummonerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
