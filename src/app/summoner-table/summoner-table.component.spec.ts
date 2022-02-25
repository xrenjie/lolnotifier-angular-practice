import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerTableComponent } from './summoner-table.component';

describe('SummonerTableComponent', () => {
  let component: SummonerTableComponent;
  let fixture: ComponentFixture<SummonerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
