import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerRowComponent } from './summoner-row.component';

describe('SummonerRowComponent', () => {
  let component: SummonerRowComponent;
  let fixture: ComponentFixture<SummonerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
