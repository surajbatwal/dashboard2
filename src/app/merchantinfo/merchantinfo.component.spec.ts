import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantinfoComponent } from './merchantinfo.component';

describe('MerchantinfoComponent', () => {
  let component: MerchantinfoComponent;
  let fixture: ComponentFixture<MerchantinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
