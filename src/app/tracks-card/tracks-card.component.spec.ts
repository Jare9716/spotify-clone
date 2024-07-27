import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksCardComponent } from './tracks-card.component';

describe('TracksCardComponent', () => {
  let component: TracksCardComponent;
  let fixture: ComponentFixture<TracksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TracksCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
