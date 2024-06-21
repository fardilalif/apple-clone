import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReturnIconComponent } from './box-return-icon.component';

describe('BoxReturnIconComponent', () => {
  let component: BoxReturnIconComponent;
  let fixture: ComponentFixture<BoxReturnIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxReturnIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxReturnIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
