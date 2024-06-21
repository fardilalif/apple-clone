import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorryIconComponent } from './lorry-icon.component';

describe('LorryIconComponent', () => {
  let component: LorryIconComponent;
  let fixture: ComponentFixture<LorryIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorryIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LorryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
