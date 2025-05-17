import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepresentativeDetailsComponent } from './sales-representative-details.component';

describe('SalesRepresentativeDetailsComponent', () => {
  let component: SalesRepresentativeDetailsComponent;
  let fixture: ComponentFixture<SalesRepresentativeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesRepresentativeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesRepresentativeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
