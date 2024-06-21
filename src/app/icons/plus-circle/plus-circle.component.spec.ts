import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusCircleComponent } from './plus-circle.component';

describe('PlusCircleComponent', () => {
  let component: PlusCircleComponent;
  let fixture: ComponentFixture<PlusCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlusCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
