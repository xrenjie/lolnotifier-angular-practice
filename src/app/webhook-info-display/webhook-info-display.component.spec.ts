import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhookInfoDisplayComponent } from './webhook-info-display.component';

describe('WebhookInfoDisplayComponent', () => {
  let component: WebhookInfoDisplayComponent;
  let fixture: ComponentFixture<WebhookInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebhookInfoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhookInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
