import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNonorderComponent } from './contact-nonorder.component';

describe('ContactNonorderComponent', () => {
  let component: ContactNonorderComponent;
  let fixture: ComponentFixture<ContactNonorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactNonorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNonorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
