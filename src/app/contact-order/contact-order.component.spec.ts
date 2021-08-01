import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOrderComponent } from './contact-order.component';

describe('ContactOrderComponent', () => {
  let component: ContactOrderComponent;
  let fixture: ComponentFixture<ContactOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
