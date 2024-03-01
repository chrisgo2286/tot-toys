import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyOverviewComponent } from './toy-overview.component';

describe('ToyOverviewComponent', () => {
  let component: ToyOverviewComponent;
  let fixture: ComponentFixture<ToyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToyOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
