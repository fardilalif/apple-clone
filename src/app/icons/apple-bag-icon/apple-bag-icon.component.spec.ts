import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleBagIconComponent } from './apple-bag-icon.component';

describe('AppleBagIconComponent', () => {
  let component: AppleBagIconComponent;
  let fixture: ComponentFixture<AppleBagIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleBagIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleBagIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
