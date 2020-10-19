import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcherportalComponent } from './archerportal.component';

describe('ArcherportalComponent', () => {
  let component: ArcherportalComponent;
  let fixture: ComponentFixture<ArcherportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcherportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcherportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
