import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldWondersComponent } from './world-wonders.component';

describe('WorldWondersComponent', () => {
  let component: WorldWondersComponent;
  let fixture: ComponentFixture<WorldWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldWondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
