import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrnersComponent } from './patrners.component';

describe('PatrnersComponent', () => {
  let component: PatrnersComponent;
  let fixture: ComponentFixture<PatrnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
