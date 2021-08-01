import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPostalComponent } from './contact-postal.component';

describe('ContactPostalComponent', () => {
  let component: ContactPostalComponent;
  let fixture: ComponentFixture<ContactPostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPostalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
